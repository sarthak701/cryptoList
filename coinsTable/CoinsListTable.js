import { DataTable } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import CoinsListHeader from "./CoinsListHeader";
import CoinRow from "./CoinRow";
import { useEffect, useState } from "react";
import { getTableFields } from "./utilFns";
import axios from "axios";

const CoinsListTable = (props) => {
  const { vsCurrency, refreshInterval, entriesPerPage } = props;

  const [order, setOrder] = useState("market_cap_desc");
  const [coinsApiData, setCoinsApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const coinsApiUrl =
    `https://api.coingecko.com/api/v3/coins/markets/?vs_currency=${
      vsCurrency ?? "usd"
    }` +
    `&per_page=${entriesPerPage ?? 5}` +
    `&order=${order}`;

  const fetchCoinsListData = () => {
    setLoading(true);
    axios
      .get(coinsApiUrl)
      .then((data) => {
        console.log("fetched", coinsApiUrl);
        setCoinsApiData(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCoinsListData();
    // const interval = setInterval(() => {
    //   fetchCoinsListData();
    // }, refreshInterval ?? 60 * 1000);
    // return () => clearInterval(interval);
  }, [order]);

  const coinsHeadersList = [
    {
      text: "Name",
      onPressCb: () => {
        setOrder("id_desc");
      },
    },
    {
      text: "Price",
      onPressCb: () => {},
    },
    {
      text: "24h Change",
      onPressCb: () => {},
    },
    {
      text: "24h Volume",
      onPressCb: () => {
        setOrder("volume_desc");
      },
    },
    {
      text: "Market Cap",
      onPressCb: () => {
        setOrder("market_cap_desc");
      },
    },
  ];

  const coinsDataList = getTableFields(coinsApiData);
  return loading ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : (
    <DataTable styles={styles.tableContainer}>
      <CoinsListHeader headersList={coinsHeadersList} />
      {coinsDataList.map((coinData) => {
        return <CoinRow {...coinData} />;
      })}
    </DataTable>
  );
};

export default CoinsListTable;

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#DCDCDC",
  },
});
