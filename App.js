import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Piece of text</Text>
      </View>
      <Text
        style={{ margin: 16, borderWidth: 1, borderColor: "red", padding: 16 }}
      >
        Hello world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
