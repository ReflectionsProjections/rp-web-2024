import { Text, Button, Box} from "@chakra-ui/react";

interface LandingPageProps {
    text: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ text }) => {
    const NavBar: React.FC = () =>
    {
        return(
            <div style={{ position: 'fixed', top: 10, right: 0, padding: '10px' }}>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 10 }}>
                    <li style={{ display: 'inline', marginRight: '10px' }}><a href="/">Speakers</a></li>
                    <li style={{ display: 'inline', marginRight: '10px' }}><a href="/auth"> PuzleBang </a></li>
                    <li style={{ display: 'inline', marginRight: '10px' }}><a href="/contact">Login</a></li>
                </ul>
            </div>
        );
    }
    return(
        <>
            <NavBar />
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <img src={"rplogo.png"} alt="Logo" style={{ position: 'absolute', top: -90, left: 10, width: '100px', height: '100px' }} />
                <Text fontSize="3xl" textAlign="center">
                    reflections
                    <span style={{ marginLeft: '10px', marginRight: '10px', transform: 'scaleY(4)', display: 'inline-block', verticalAlign: 'top' }}>|</span>
                    projections
                </Text>
                <Button variant={"solid"} style = {{marginTop: '200px'}} onClick={(_ => console.log("clicked!"))}> Register Now! </Button>
                <div style={{ border: '1px solid white', padding: '20px', width: '300px', margin: '20px auto' }}>
                    <Box
                        borderWidth="1px"
                        borderRadius="lg"
                        padding="4"
                        width="400px"
                        height = "400px"
                        margin="auto" 
                        marginTop="100px" 
                        marginBottom="100px" 
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
            >   
                     <Text fontSize="xl" fontWeight="bold" marginBottom="2">Speaker Series</Text>
                
                    </Box>
                    
                </div>
            </div>
        </>
    );
}

export default LandingPage;
