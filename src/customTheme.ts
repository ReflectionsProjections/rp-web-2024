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
export const pictureBox = {
	color: "pink",
	top: "50px",
	background: "gray",
	width: "300px", 
	height: "400px",
	marginTop: "200px"
}; 
export const poloroidBox = 
{
	width: "200px",
	height: "200px",
	marginTop: "100px", 
	background: "gray",
}; 
export const sponsorBox = 
{
	width: "550px",
	height: "100px",
	background: "lightblue", 
	marginLeft: "20px", 
	marginRight: "20px"
	
};
export const bigBox = 
{
	// width: "1200px",
	// height:  "600px", 
	background: "black",
	padding: "20px",
	marginTop: "20px",
	// marginLeft: "20px",
	// marginRight: '20px'
}; 
export const smallBox = 
{
	// width: "1100px",
	// height:  "500px", 
	background: "gray",
	padding: "50px",
	margin: "10px"

}; 
export const jeapordyBox = 
{
	width: "350px",
	height: "200px",
	background: "lightblue", 
	borderRadius: "15px"
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


export const LandingButton = {
	size:'lg',
	height:"6vw",
	minHeight: "60px",
	width:"15vw",
	minWidth:"150px",
	border:"solid 3px black",
	fontSize: "max(2.1vw, 21px)",
	fontFamily:"Nunito",
	fontWeight:"500",
	borderRadius:"10px",
};


