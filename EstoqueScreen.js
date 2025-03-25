import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EstoqueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque</Text>
      <Text>Lista de produtos cadastrados...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
