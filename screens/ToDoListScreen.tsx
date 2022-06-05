import * as React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Center,
  HStack,
  IconButton,
  Icon,
  Checkbox,
  ScrollView,
  useToast,
} from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export const ToDoListScreen = () => {
  const toast = useToast();
  const [list, setList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const addItem = (title) => {
    if(title?.length > 4){
      setList([
        ...list,
        {
          title: title,
          isCompleted: false,
        },
      ]);
    }else{
      toast.show({
        title: "Something went wrong",
        status: "error",
        placement: "top",
        description: "Please Enter At Text With Atleast 5 Charachtars"
      })
    }
  };

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
      itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
    );
    setList(temp);
  };

  return (
    <Center w="100%">
      <Box maxW="300" w="100%">
        <Heading mb="2" size="md" style={{paddingVertical:50}}>
          Today's Tasks - React Native
        </Heading>
        <VStack space={4}>
          <HStack space={2}>
            <Input
              flex={1}
              onChangeText={(v) => setInputValue(v)}
              value={inputValue}
              placeholder="Add Task"
            />
            <IconButton
              borderRadius="sm"
              variant="solid"
              icon={
                <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
              }
              onPress={() => {
                addItem(inputValue);
                setInputValue("");
              }}
            />
          </HStack>
          <VStack space={2}>
          <ScrollView height={Dimensions.get("window").height -400}>
            {list.map((item, itemI) => (
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center"
                key={item.title + itemI.toString()}
              >
                <Checkbox
                  isChecked={item.isCompleted}
                  onChange={() => handleStatusChange(itemI)}
                  value={item.title}
                >
                  <Text
                    mx="2"
                    strikeThrough={item.isCompleted}
                    _light={{
                      color: item.isCompleted ? "gray.400" : "coolGray.800",
                    }}
                    _dark={{
                      color: item.isCompleted ? "gray.400" : "coolGray.50",
                    }}
                  >
                    {item.title}
                  </Text>
                </Checkbox>
                <IconButton
                  size="sm"
                  colorScheme="trueGray"
                  icon={
                    <Icon
                      as={Entypo}
                      name="trash"
                      size="xs"
                      color="red.600"
                    />
                  }
                  onPress={() => handleDelete(itemI)}
                />
              </HStack>
            ))}
            </ScrollView>
          </VStack>
        </VStack>
      
      </Box>
    </Center>
  );
};
