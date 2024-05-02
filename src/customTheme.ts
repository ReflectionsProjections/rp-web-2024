import { extendTheme} from "@chakra-ui/react";
import { Button} from "./components/Button";

const baseText = {
	baseStyle:{
		textAlign: "center",
		fontSize: "30",
		color: "white",
		lineHeight: "1.4",
		
	},
};
export const logoStyle = {
	position: "absolute" as const,
	top: "5px",
	left: "5px",
	
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
		darkBlue: '#0F102E',
		// ...

	},

	textStyles: {
		header: {
		  fontSize: '70px',
		  lineHeight: '110%',
		  letterSpacing: '-2%',
		  color:"white",
		  fontFamily: "Roboto Slab",
		  top:"20%",
		},
		subheading: {
		  fontSize: '30px',
		  lineHeight: '110%',
		  color:"white",
		  fontFamily: "Roboto Slab",
		  top:"20%",
		},
		footer: {
		  fontSize: '25px',
		  lineHeight: '110%',
		  color:"white",
		  fontFamily: "Nunito",
		  top:"20%",
		}
	  },

	components: {
		Button, 
		Text:
		{
			...baseText
		}
	}
});
