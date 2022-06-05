import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  WarningOutlineIcon,
  Stack,
  useToast,
} from "native-base";
import { useContext } from "react";
import { AuthContext } from "../App";
import { useState } from "react";

export const SignUpScreen = () => {
  const authContext = useContext(AuthContext);
  const [formData, setData] = useState({});
  const toast = useToast();

  console.log(authContext?.signUp)
  const handleSignUp = () => {
    if(formData?.email && formData?.password && formData?.confirmPassword){
      if( formData?.password === formData?.confirmPassword){
        authContext?.signUp(formData)
      }else{
        toast.show({
          title: "Something went wrong",
          status: "error",
          placement: "top",
          description: "Please Enter An Identical Password"
        })
      }
    }else{
      toast.show({
        title: "Something went wrong",
        status: "error",
        placement: "top",
        description: "Please Make Sure to Fill all Fields"
      })
    }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
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
          <FormControl isRequired>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              autoCapitalize="none"
              onChangeText={(value) => setData({ ...formData, confirmPassword: value })}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button onPress={handleSignUp} mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
