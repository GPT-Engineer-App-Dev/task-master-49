import { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setNewTask(task.text);
  };

  const updateTask = () => {
    if (newTask.trim() === "") return;
    setTasks(tasks.map((task) => (task.id === currentTask.id ? { ...task, text: newTask } : task)));
    setNewTask("");
    setIsEditing(false);
    setCurrentTask(null);
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={4}>
        <HStack>
          <Input
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={isEditing ? updateTask : addTask}>
            {isEditing ? "Update Task" : "Add Task"}
          </Button>
        </HStack>
        <VStack spacing={2} w="100%">
          {tasks.map((task) => (
            <HStack key={task.id} justify="space-between" w="100%">
              <Text>{task.text}</Text>
              <HStack>
                <IconButton
                  aria-label="Edit"
                  icon={<FaEdit />}
                  onClick={() => editTask(task)}
                />
                <IconButton
                  aria-label="Delete"
                  icon={<FaTrash />}
                  onClick={() => deleteTask(task.id)}
                />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Todo;