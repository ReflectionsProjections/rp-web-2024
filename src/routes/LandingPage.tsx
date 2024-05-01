import { Text, Center, Box, Button} from "@chakra-ui/react";

export function LandingPage() {
	return (
	  <>
		<Box bg="">
		  <Text variant="baseStyle">
			<Center h='300px'>
			  <Text>Welcome to Reflections | Projections 2024!</Text>
			</Center>
			<Text>September 18 - 22</Text>
			<Button variant={"solid"}>REGISTER</Button>
		  </Text>
		</Box>
	  </>
	);
  }
export default LandingPage;
