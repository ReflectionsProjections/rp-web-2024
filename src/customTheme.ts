import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";

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
	textStyles: {
		h1: {
		  fontSize: ['48', '72px'],
		  lineHeight: '110%',
		  letterSpacing: '-2%',
		  color:"white",
		  fontFamily:"Kufam",
		  top:"20%",
		},
		h2: {
		  fontSize: ['36px', '48px'],
		  fontWeight: 'semibold',
		  lineHeight: '110%',
		  letterSpacing: '-1%',
		  fontFamily:"Kufam",
		  padding:10,
  
		},
	  },
	components: {
		Button,
		Text,
	}
});
