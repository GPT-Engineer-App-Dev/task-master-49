import { useState } from "react";
import { Box, Checkbox, IconButton, Input, HStack } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <HStack spacing={4} w="100%">
      <Checkbox isChecked={todo.completed} onChange={() => onUpdate(todo.id, newText, !todo.completed)} />
      {isEditing ? (
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <Box flex="1" textDecoration={todo.completed ? "line-through" : "none"}>
          {todo.text}
        </Box>
      )}
      <IconButton
        aria-label={isEditing ? "Save" : "Edit"}
        icon={isEditing ? <FaSave /> : <FaEdit />}
        onClick={isEditing ? handleSave : () => setIsEditing(true)}
      />
      <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => onDelete(todo.id)} />
    </HStack>
  );
};

export default TodoItem;