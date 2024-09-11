import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from "@chakra-ui/react";
import errormeme from "/errormeme.png";
import "@fontsource/kufam/900-italic.css";

const NotFound = () => {
	const [isHovered, setIsHovered] = useState(false);

	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column' as const,
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			textAlign: 'center' as const,
			fontFamily: 'Kufam',
			backgroundColor: '#1C486D '
		},
		heading: {
			fontSize: '6rem',
			margin: '0',
			color: 'white',
		},
		paragraph: {
			fontSize: '1.5rem',
			color: 'white',
		},
		link: {
			display: 'inline-block',
			marginTop: '20px',
			padding: '10px 20px',
			fontSize: '1.2rem',
			color: isHovered ? 'white' : 'black',
			backgroundColor: isHovered ? '#19385B' : '#EDCCB8',
			textDecoration: 'none',
			borderRadius: '5px',
			transition: 'background-color 0.3s ease',
			fontFamily: 'Nunito',
		},
		image: {
			maxWidth: '400px',
			marginBottom: '20px',
			borderRadius: '15px',
		},
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>404</h1>
			<Image 
				src={errormeme}
				style={styles.image}
			/>
			<p style={styles.paragraph}>Hol’ up! This ain’t the 80s??</p>
			<Link
				to="/"
				style={styles.link}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
                Take Me Back!
			</Link>
		</div>
	);
};

export default NotFound;
