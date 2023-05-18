import { useFormik } from "formik";
import { FormControl, Flex, Input, IconButton } from "@chakra-ui/react";
import { MdAddCircle, MdClearAll } from "react-icons/md";
import { AddTodo, ClearCompletedTodos } from "./todo.type";

interface IAddTodoProps {
  onAddTodo: AddTodo;
  onClearCompleted: ClearCompletedTodos;
}

export default function AddTodo({
  onAddTodo,
  onClearCompleted,
}: IAddTodoProps) {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      if (values.title.length > 0) {
        onAddTodo({ id: Date.now(), title: values.title, completed: false });
        formik.resetForm();
      }
    },
  });

  const handleClearCompleted = () => {
    onClearCompleted();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex align={"center"} justify={"space-between"}>
        <FormControl id="title">
          <Input
            placeholder="Do Homework"
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </FormControl>
        <IconButton
          type="submit"
          aria-label="Add Todo"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          ml={2}
          disabled={formik.values.title.length == 0}
          icon={<MdAddCircle />}
        ></IconButton>
        <IconButton
          aria-label="Clear All Completed"
          type="button"
          ml={2}
          onClick={() => handleClearCompleted()}
          icon={<MdClearAll />}
        ></IconButton>
      </Flex>
    </form>
  );
}
