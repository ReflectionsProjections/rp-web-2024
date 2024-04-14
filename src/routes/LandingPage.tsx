import { Text, Button, Box, Image, HStack, Stack} from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { logoStyle } from "../customTheme";


interface LandingPageProps {
    text: string;
}
export function LandingPage ({text}: LandingPageProps)
{
	return(
		<>   
        {}
        <NavBar /> 
        <Text variant="baseStyle">Welcome to Reflections | Projections 2024 ! </Text>
        <HStack spacing="20px" style={logoStyle}>
                <Image src="rplogo.png" alt="R|P LOGO alt" boxSize="60px" />
        </HStack>
		</>
	);
}
export default LandingPage;
