import React from "react";
import { Text, View } from "react-native";

export const LogoTitle = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>{title}</Text>
    </View>
  );
};
