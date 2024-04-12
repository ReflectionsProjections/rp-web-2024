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

	components: {
		Button
	}
});
