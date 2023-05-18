import {
  Flex,
  ListIcon,
  ListItem,
  Stack,
  List,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { MdCheckCircle, MdTimer, MdDone, MdClose } from "react-icons/md";
import { Todo, ToggleTodo } from "./todo.type";

interface ITodoListProps {
  todos: Todo[];
  onToggleTodo: ToggleTodo;
}

export default function TodoList({ todos, onToggleTodo }: ITodoListProps) {
  const handleToggle = (id: number) => {
    onToggleTodo(id);
  };

  return (
    <Stack>
      <List>
        {todos.map((todo) => (
          <ListItem my={2} key={todo.id}>
            <Flex align={"center"} justify={"space-between"}>
              <Flex align={"center"}>
                <ListIcon
                  as={todo.completed ? MdCheckCircle : MdTimer}
                  color={todo.completed ? "green.500" : "gray.500"}
                />
                <Text decoration={todo.completed ? "line-through" : "none"}>
                  {todo.title}
                </Text>
              </Flex>
              <IconButton
                aria-label="Toggle"
                type="button"
                bg={todo.completed ? "red.400" : "green.400"}
                _hover={{
                  bg: todo.completed ? "red.500" : "green.500",
                }}
                color={"white"}
                size="sm"
                onClick={() => handleToggle(todo.id)}
                icon={todo.completed ? <MdClose /> : <MdDone />}
              ></IconButton>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
