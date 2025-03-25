import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RelatoriosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios de Vendas</Text>
      <Text>Gráficos e estatísticas...</Text>
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
