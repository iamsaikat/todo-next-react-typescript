import { useState } from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Todo } from "./todo.type";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: Todo) => {
    setTodos([...todos, item]);
  };

  const handleToggle = (id: number) => {
    let newTodoList = todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodoList);
  };

  const handleClearCompleted = () => {
    let newTodoList = todos.filter((todo) => {
      if (!todo.completed) return todo;
    });

    setTodos(newTodoList);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Create a Todo
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          Write things here so you dont forget
        </Text>
        <AddTodo onAddTodo={addTodo} onClearCompleted={handleClearCompleted} />

        <TodoList todos={todos} onToggleTodo={handleToggle} />
      </Stack>
    </Flex>
  );
}
