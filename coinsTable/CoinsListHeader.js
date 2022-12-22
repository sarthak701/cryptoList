import { DataTable } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

const CoinsListHeader = (props) => {
  const { headersList } = props;

  return (
    <DataTable.Header style={styles.header}>
      {headersList.map((header) => {
        const { text, onPressCb } = header;
        return (
          <DataTable.Title key={text}>
            <Text onPress={() => onPressCb()}>{text}</Text>
          </DataTable.Title>
        );
      })}
    </DataTable.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
});

export default CoinsListHeader;
