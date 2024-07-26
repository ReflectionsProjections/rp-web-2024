import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	// The styles all button have in common
	baseStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: 'base', // <-- border radius is same for all variants and sizes
	},
	// Two sizes: sm and md
	sizes: {
		sm: {
			fontSize: 'sm',
			px: 4, // <-- px is short for paddingLeft and paddingRight
			py: 3, // <-- py is short for paddingTop and paddingBottom
		},
		md: {
			fontSize: 'md',
			px: 6, // <-- these values are tokens from the design system
			py: 4, // <-- these values are tokens from the design system
		},
	},
	// Two variants: outline and solid
	variants: {
		outline: {
			border: '2px solid',
			borderColor: 'purple.500',
			color: 'purple.500',
		},
		solid: {
			bg: 'darkBlue',
			color: 'white',
			height: "50px",
			minWidth: "120px",
			margin: "auto",
			borderRadius: '5px'
		},
		registration_white: {
			bg: "rgba(255, 255, 255, 0.5)",
			_hover: {
			  bg: "white",
			  color: "#bb3f9c",
			},
			_focus: {
			  outline: "none",
			},
		},
		registration_pink: {
			bg: "rgba(187, 63, 156, 0.5)",
			_hover: {
			  bg: "white",
			  color: "#bb3f9c",
			},
			_focus: {
			  outline: "none",
			},
		},
	},
	// The default size and variant values
	defaultProps: {
		size: 'md',
		variant: 'outline',
	},
});