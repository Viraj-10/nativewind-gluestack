import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import "./global.css";

import React from "react";

export default function App() {
  const [isChecked, setIsChecked] = React.useState(true);
  const className = isChecked ? "checked" : "";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable className={"group/checkbox p-4 bg-fuchsia-700 checked"}>
        <Text className="group-[.checked]/checkbox:text-fuchsia-100">
          Check Text
        </Text>
      </Pressable>
    </View>
  );
}
