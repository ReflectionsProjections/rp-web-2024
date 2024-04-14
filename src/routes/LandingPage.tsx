import { Text, HStack, Image} from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { logoStyle } from "../customTheme";

export function LandingPage ()
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
