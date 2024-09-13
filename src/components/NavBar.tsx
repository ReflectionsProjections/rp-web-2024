import { Avatar, Box, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    showAuth?: boolean;
}

export function NavBar({ showAuth = false }: NavBarProps) {
    const navigate = useNavigate(); 

    const signOut = () => {
        localStorage.removeItem("jwt");
        navigate("/"); 
    };

    return (
        <HStack justify="space-between" width="100%" position='absolute' backgroundColor='#00456D' borderBottom='solid 3px #003B5C'>
            <Image
                onClick={() => navigate('/')} 
                src="/rp_logo.svg"
                alt="R|P LOGO alt"
                height="auto"
                maxW="58px"
                padding="0.5rem"
                cursor={"pointer"}
                transition={'ease-in 0.2s'}
                _hover={{ transform: 'scale(1.2)' }}
            />

            <HStack spacing={4}>
                <Button
                    onClick={() => navigate('/speakers')}
                    variant="link"
                    color="white"
                >
                    Speakers
                </Button>

                {showAuth ? (
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                            mr={2}
                        >
                            <Avatar bg='blue.900' size={'sm'} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={signOut}>Sign Out</MenuItem>
                        </MenuList>
                    </Menu>
                ) : <Box></Box>}
            </HStack>
        </HStack>
    );
}
