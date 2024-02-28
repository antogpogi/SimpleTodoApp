import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TaskList from "../src/TaskList/TaskList";
import Login from "../src/Login/Login";
import Splash from "./Splash";
import Task from "../src/Task/Task";
import { LogoTitle } from "../components/LogoTitle";
import { Button, Text, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const Navigation = ({ state }) => {
  if (state.isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.userToken != null ? (
          <>
            <Stack.Screen
              name="TaskList"
              component={TaskList}
              options={{
                headerTitle: (props) => <LogoTitle title={"Tasks"} />,
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
                  >
                    <Text style={{ color: "white", fontSize: 13 }}>
                      Create new
                    </Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="Task"
              component={Task}
              options={{
                headerTitle: () => <LogoTitle title={"New Todo"} />,
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
                  >
                    <Text style={{ color: "white", fontSize: 13 }}>Save</Text>
                  </TouchableOpacity>
                ),
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
