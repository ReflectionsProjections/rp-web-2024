import { Box, Grid, GridItem } from '@chakra-ui/react';
import { NavBar } from '../routes/NavBar';
import LandingPage from '../routes/LandingPage';

export function PageLayout() {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bgImage="landing_page_bg.svg" // Change this to the correct path of your image
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            // bgGradient="linear-gradient(0deg, #2FD2CB, #0F102E)"
            overflow="auto" // Enable scrolling if content exceeds viewport height
        >
            <Grid
                templateAreas={`"header header" "nav main" "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
                p={2} // Adjust padding here
                h="100%" // Make the Grid cover the entire height of its parent (the Box)
            >
                <GridItem area={'header'}>
                    <NavBar />
                </GridItem>

                <GridItem area={'nav'}>
                    {/* Add additional navigation components here */}
                </GridItem>

                <GridItem area={'main'} px={4}>
                    {}
                    <LandingPage />
                    {}
                    {/* <ImageSlider slides={SliderData} /> */}
                    {}
                </GridItem>

                <GridItem area={'footer'}>
                    {

                    }
                </GridItem>
            </Grid>
        </Box>
    );
}
