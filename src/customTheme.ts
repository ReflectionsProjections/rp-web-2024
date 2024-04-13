import { extendTheme, Text, Image} from "@chakra-ui/react";
import { Button} from "./components/Button";

const baseText = {
	baseStyle:{
		textAlign: "center",
		fontSize: "30",
		color: "black.600",
		lineHeight: "1.4",
	},
  };
export const logoStyle = {
	position: "absolute" as const,
	top: "0",
	left: "0",
	
};

  
export const customTheme = extendTheme({
	colors: {
		transparent: 'transparent',
		black: '#000',
		white: '#fff',
		gray: {
			50: '#f7fafc',
			// ...
			900: '#171923',
		},
		// ...

	},

	components: {
		Button, 
		Text:
		{
			...baseText
		}
	}
});


