import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function App() {
  let [num, setNum] = useState(0);

  return (
    <View style={styles.app}>
      <Text> ytuhry </Text>
      <TextInput
        style={{ border: "6px", backgroundColor: "pink" }}
        placeholder="ВНЕСИТЕ СУММУ"
        onChangeText={(num) => setNum(num / 2)}
      />
      <Text placeholder="ВАША СУММА"> {num} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
