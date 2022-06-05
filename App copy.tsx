import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { SignInScreen } from "./screens/SignInScreen";
import { ToDoListScreen } from "./screens/ToDoListScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <></>
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //   <Stack.Navigator initialRouteName="SignIn">
    //   {state.userToken == null ? (
    //   // No token found, user isn't signed in
    //   <Stack.Screen
    //     name="SignIn"
    //     component={SignInScreen}
    //     options={{
    //       title: 'Sign in',
    //       // When logging out, a pop animation feels intuitive
    //       // You can remove this if you want the default 'push' animation
    //       animationTypeForReplace: state.isSignout ? 'pop' : 'push',
    //     }}
    //   />
    // ) : (
    //   // User is signed in
    //   <Stack.Screen name="Home" component={HomeScreen} />
    // )}
    //     <Stack.Screen name="SignIn" component={SignInScreen} />
    //     <Stack.Screen name="SignUp" component={SignUpScreen} />
    //     <Stack.Screen name="ToDoList" component={ToDoListScreen} />
    //   </Stack.Navigator>
    //   </NavigationContainer>
    // </NativeBaseProvider>
  );
}
