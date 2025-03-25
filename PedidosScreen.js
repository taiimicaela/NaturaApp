import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PedidosScreen() {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    carregarPedidos();
  }, []);

  const salvarPedido = async () => {
    const novoPedido = { cliente, produto };
    const novosPedidos = [...pedidos, novoPedido];
    setPedidos(novosPedidos);
    await AsyncStorage.setItem("@pedidos", JSON.stringify(novosPedidos));
    setCliente("");
    setProduto("");
  };

  const carregarPedidos = async () => {
    const dados = await AsyncStorage.getItem("@pedidos");
    if (dados) setPedidos(JSON.parse(dados));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Pedido</Text>
      <TextInput placeholder="Nome do Cliente" value={cliente} onChangeText={setCliente} style={styles.input} />
      <TextInput placeholder="Produto" value={produto} onChangeText={setProduto} style={styles.input} />
      <Button title="Salvar Pedido" onPress={salvarPedido} />
      <FlatList
        data={pedidos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.cliente} - {item.produto}
          </Text>
        )}
      />
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
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
