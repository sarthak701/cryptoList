import { View, StyleSheet } from "react-native";
import { useState } from "react";
import CoinsListTable from "./coinsTable/CoinsListTable";

export default function App() {
  const [cryptoListdata, setCryptoListData] = useState();

  return (
    <View style={styles.container}>
      <CoinsListTable refreshInterval={5 * 1000} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
