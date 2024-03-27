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