import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Todo App</Text>
        <Text>Click the button below to start managing your tasks.</Text>
        <Button as={Link} to="/todo" colorScheme="teal" size="lg">
          Go to Todo App
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;