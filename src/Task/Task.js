import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded, todoEditted, todoRemoved } from "../../store/todoSlice";
import { LogoTitle } from "../../components/LogoTitle";

const Task = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState(
    route.params?.item?.todo ? false : true
  );
  const [todo, setTodo] = useState(route.params?.item?.todo);

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <LogoTitle title={"Edit Todo"} />,
      headerRight: () => (
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
          onPress={newTodo ? saveNewTask : editTask}
        >
          <Text style={{ color: "white", fontSize: 13 }}>
            {newTodo ? "Save" : "Update"}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, todo]);

  const saveNewTask = () => {
    dispatch(
      todoAdded({
        id: todos.length + 1,
        todo: todo,
        isPrioritize: false,
        completed: false,
      })
    );
    navigation.goBack();
  };

  const deleteTask = () => {
    dispatch(todoRemoved(todo.id));
    navigation.goBack();
  };

  const editTask = () => {
    dispatch(
      todoEditted({
        id: route.params?.item.id,
        todo: todo,
        isPrioritize: false,
        completed: false,
      })
    );
    navigation.goBack();
  };

  return (
    <View style={{ padding: 10 }}>
      <SafeAreaView>
        <Text style={styles.text}>Todo</Text>
        <TextInput
          placeholder="Ex: Make a meal, Cleanup the room..."
          style={styles.textInput}
          onChangeText={(value) => {
            setTodo(value);
          }}
          value={todo}
        />
        {!newTodo && (
          <>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                padding: 10,
                borderRadius: 5,
                backgroundColor: "red",
              }}
              onPress={deleteTask}
            >
              <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "600",
  },
});
