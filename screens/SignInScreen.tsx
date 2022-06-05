import * as React from "react";
import {
  Box,
  Link,
  Heading,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  HStack,
  useToast,
  WarningOutlineIcon,
  Stack,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import {  TouchableOpacity } from "react-native";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../App";

export const SignInScreen = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const [formData, setData] = useState({});
  const toast = useToast();
  
  const handleSignIn = () => {
    if(formData?.email === "test@test.com" && formData?.password === "test@123"){
        authContext?.signIn(formData)
      }else{
        toast.show({
          title: "Something went wrong",
          status: "error",
          placement: "top",
          description: "Please Enter An Identical Password"
        })
      }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
        <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
            autoCapitalize="none"
              onChangeText={(value) => setData({ ...formData, email: value })}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Must Be A Valid Email Address
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="12"></Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              autoCapitalize="none"
              onChangeText={(value) => setData({ ...formData, password: value })}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSignIn}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <TouchableOpacity
           
              onPress={() => navigation.navigate("SignUp")}
            >
               <Text
               color="indigo.500"
               fontWeight="medium"
               fontSize="sm"
             >
              Sign Up
            </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
