import React from "react";
import Main from "./components/Main";
import OutputPage from "./components/OutputPage";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Main"
          component = {Main}
          options={{title: 'Главная'}}
        />
        <Stack.Screen
          name = "OutputPage"
          component = {OutputPage}
          options={{title: 'Результат'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
