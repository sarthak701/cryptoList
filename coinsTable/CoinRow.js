import { DataTable } from "react-native-paper";
import { Image, Text } from "react-native";

const CoinRow = (coinRowData) => {
  const { id, name, price, change24h, volume24h, marketCap } = coinRowData;
  return (
    <DataTable.Row
      key={id}
      style={{
        width: "100%",
      }}
    >
      <DataTable.Cell
        key={1}
        style={{
          flex: 1,
          gap: 4,
        }}
      >
        <Image
          source={{
            uri: name.imageUrl ?? "",
            height: 16,
            width: 16,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          {name.symbol.toUpperCase()}
        </Text>
        <Text>{name.name}</Text>
      </DataTable.Cell>
      <DataTable.Cell key={2}>
        <Text>{price}</Text>
      </DataTable.Cell>
      <DataTable.Cell key={3}>
        <Text
          style={{
            color: `${change24h < 0 ? "red" : "green"}`,
          }}
        >{`${change24h}%`}</Text>
      </DataTable.Cell>
      <DataTable.Cell key={4}>{`${volume24h}M`}</DataTable.Cell>
      <DataTable.Cell key={5}>{`${marketCap}M`}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default CoinRow;
