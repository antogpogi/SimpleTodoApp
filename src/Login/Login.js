import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { AuthContext } from "../../config/AuthProvider";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginHorizontal: 50 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Sign in"
          onPress={() => signIn({ username, password })}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
