import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import PedidosScreen from "./src/screens/PedidosScreen";
import EstoqueScreen from "./src/screens/EstoqueScreen";
import RelatoriosScreen from "./src/screens/RelatoriosScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Pedidos" component={PedidosScreen} />
        <Tab.Screen name="Estoque" component={EstoqueScreen} />
        <Tab.Screen name="Relatórios" component={RelatoriosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
