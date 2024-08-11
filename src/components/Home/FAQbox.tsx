import { Box, Button, useDisclosure, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionText = motion(Text);

const CollapsibleSection = ({
	question,
	answer,
}: {
	question: any;
	answer: any;
}) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<MotionBox
			width={{ base: "100%", md: "80%" }}
			maxWidth="800px" 
			mb={4}
			borderRadius="md"
			boxShadow="md"
			position="relative"
			transition="background-color 0.6s ease, border-radius 0.6s ease"
			mx="auto" 
		>
			<MotionBox
				onClick={onToggle}
				minHeight='150px'
				width="100%"
				alignItems='center'
				display='flex'
				p={{ base: 4, md: 6 }}
				bg="#D3D3D3"
				borderRadius={isOpen ? "8px 8px 0 0" : "md"}
				color="#070F2D"
				fontFamily="Kafum"
				fontWeight="semibold"
				textTransform="none"
				border="none"
				style={{
					cursor: "pointer",
				}}
				transition="height 0.6s ease, border-radius 0.6s ease"
			>
				<Button
					onClick={onToggle}
					minHeight={'100%'}
					minWidth={'100%'}
					maxWidth={'100%'}
					maxHeight={'100%'}
					bg="transparent"
					color="inherit"
					// borderRadius={isOpen ? "8px 8px 0 0" : "md"}
					// p={4}
					_hover={{ bg: "transparent" }}
					_active={{ bg: "transparent" }}
					_focus={{ boxShadow: "none" }}
					border="none"
					textAlign="left"
					whiteSpace="normal"
					fontSize={{ base: "md", md: "lg" }}
				>
					<Text
						color="inherit"
						fontFamily="Kafum"
						fontWeight="semibold"
						textTransform="none"
						fontSize={{ base: "5vw", md: "3vw" }}
					>
						{question}
					</Text>
				</Button>
			</MotionBox>
			<AnimatePresence>
				{isOpen && (
					<MotionBox
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.6 }}
						style={{
							overflow: "hidden",
							width: "100%",
							backgroundColor: "#ab9e9e",
							borderRadius: "0 0 8px 8px",
							marginTop: 0,
						}}
					>
						<MotionVStack
							align="start"
							p={{ base: 4, md: 6 }}
							borderRadius="0 0 8px 8px"
							boxShadow="md"
							style={{ overflow: "hidden", width: "100%" }}
						>
							<MotionText
								color="white"
								fontFamily="Kafum"
								fontWeight="semibold"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.6 }}
								textAlign="center"
								width="100%"
								fontSize={{ base: "5vw", md: "3vw" }}
							>
								{answer}
							</MotionText>
						</MotionVStack>
					</MotionBox>
				)}
			</AnimatePresence>
		</MotionBox>
	);
};

export default CollapsibleSection;
