import { Box, Grid, GridItem } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import Header from '../components/Home/Landing';
import Info from '../components/Home/Info';
import Events from '../components/Home/Events';
import FAQ from '../components/Home/FAQ';
import Sponsors from '../components/Home/Sponsors';

export default function MainPage() {
	return (
		<Box>
			<NavBar />
			<Header />
			<Info/>
			<Events/>
			<FAQ/>
			<Sponsors/>
		</Box>
		
	);
}
