import React, { useContext, useEffect, useMemo } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { TaskListItem } from "./TaskListItem";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { todoPrioritized, todoToggled } from "../../store/todoSlice";
import { AuthContext } from "../../config/AuthProvider";

const TaskList = ({ navigation }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              height: 35,
              paddingHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
            }}
            onPress={() => {
              signOut();
            }}
          >
            <Text style={{ color: "black", fontSize: 13 }}>Change User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              height: 35,
              paddingHorizontal: 10,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
            }}
            onPress={() => {
              navigation.navigate("Task");
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>Create new</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  if (todos.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>No todos...</Text>
      </View>
    );
  }

  const sortItems = (data) => {
    return data.slice().sort((a, b) => {
      var nameA = a.todo.toLowerCase(),
        nameB = b.todo.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 5, marginTop: 10 }}>
      <FlatList
        data={useMemo(() => sortItems(todos), [todos])}
        renderItem={({ item }) => (
          <TaskListItem
            item={item}
            onPressView={() => {
              navigation.navigate("Task", {
                item: item,
              });
            }}
            onPressCompleted={() => {
              dispatch(todoToggled(item.id));
            }}
            onPressPriority={() => {
              dispatch(todoPrioritized(item.id));
            }}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
