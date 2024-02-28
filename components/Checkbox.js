import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Checkbox = ({ value, boxColor = "green", onPress = () => {} }) => {
  const [isButtonChecked, setIsButtonChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsButtonChecked((prev) => !prev);
        onPress();
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "black",
            marginHorizontal: 5,
            backgroundColor: isButtonChecked ? boxColor : "white",
          }}
        />
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
