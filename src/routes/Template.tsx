import { Button, Text } from "@chakra-ui/react";

interface templateProps {
    text: string
}

export default function Template ({text}: templateProps) {
	return (
		<>
			<Text> This is the {text} page! </Text>
			<Button variant={"solid"} onClick={(_ => console.log("clicked!"))}> Hi! </Button>
		</>
	);
} 
<<<<<<< HEAD

=======
>>>>>>> 568b4e0481be7f8cd61a3357ed9fa938d8b26582
