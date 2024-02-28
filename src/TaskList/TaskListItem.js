import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "../../components/Checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TaskListItem = ({
  item,
  onPressView,
  onPressCompleted,
  onPressPriority,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ paddingRight: 5 }}>
          <Checkbox onPress={onPressCompleted} />
        </View>
        <TouchableOpacity onPress={onPressView}>
          <Text style={styles.todo}>{item.todo}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Checkbox
          onPress={onPressPriority}
          value={"Priority"}
          boxColor="yellow"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 14,
    fontWeight: "normal",
  },
});
