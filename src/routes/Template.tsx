import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
interface templateProps {
    text: string
}

export default function Template ({text}: templateProps)
{
	const navigate = useNavigate()

	function handleClick() {
		console.log("")
		navigate('/auth');
	  }
	return(
		<>
			<Text> This is the {text} page! </Text>
			<Button variant={"solid"} onClick={handleClick}>Register</Button>
		</>
	);
} 