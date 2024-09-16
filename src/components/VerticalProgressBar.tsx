import { Box, VStack } from '@chakra-ui/react';
import '../App.css';



const VerticalProgressBar = ({ userPoints = 0, isMobile=false }) => {
	const percentageFilled = userPoints / 50.0; // 50 is the total number of points to earn
	const totalBoxes = 10;
	const filledBoxes = Math.trunc(totalBoxes * percentageFilled);
	const boxes = Array(totalBoxes).fill(false).map((_, index) => index < filledBoxes).reverse();

	return (
		<Box
			mt={isMobile ? 20 : 0}
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			minW="60px"
			minH={isMobile ? "342px" : "342px"}
			// h="60px"
			transform={isMobile ? "rotate(0deg)" :"rotate(90deg)"}
			p="8px"
			bg={userPoints >= 50.0 ? 'teal.600' : 'gray.800'}
			borderRadius="8px"
			borderColor={userPoints >= 50.0 ? 'teal.500' : 'gray.600'}
			borderWidth="2px"
			// boxShadow={filledBoxes === totalBoxes ? '0 0 50px 20px rgba(0, 255, 255, 0.8)' : 'md'}
			transition="background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
			animation={userPoints >= 50.0 ? 'glow 3s infinite': 'none'}
		>
			<VStack spacing={2}>
				{userPoints >= 50.0 ? (
					<Box
						w="100%"
						h="100%"
						bg="teal.500"
						borderRadius="8px"
						boxShadow="0 0 30px 10px rgba(0, 255, 255, 0.8)"
                        
					/>
				) : (
					boxes.map((isFilled, index) => (
						<Box
							key={index}
							w="25px"
							h="25px"
                            
							bg={isFilled ? 'teal.500' : 'transparent'}
							border={isFilled ? 'none' : '2px solid teal'}
							borderRadius="4px"
							boxShadow={isFilled ? '0 0 12px teal' : 'none'}
							transition="background-color 0.3s ease, box-shadow 0.3s ease"

							// style={styles.glow}
						/>
					))
				)}
			</VStack>
		</Box>
	);
};

export default VerticalProgressBar;
