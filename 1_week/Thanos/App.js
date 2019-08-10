import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const result = Math.random();
  if (result < 0.5) {
    return (
      <View style={styles.container}>
        <Text>당신은 살아남았습니다.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>당신은 우주의 균형을 위해 희생되었습니다.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
