
import { chakra, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { isValidMotionProp } from 'framer-motion';
import { ReactNode } from "react";

const MotionBox = chakra(motion.div, {
	shouldForwardProp: isValidMotionProp,
});

const MotionVStack = chakra(motion.div, {
	shouldForwardProp: isValidMotionProp,
});

const MotionText = chakra(motion.div, {
	shouldForwardProp: isValidMotionProp,
});

// const MotionBox = ({ children, ...props }: { children: ReactNode }) => {
// 	return (
// 		<motion.div>
// 			<Box {...props}>{children}</Box>
// 		</motion.div>
// 	);
// };

// const MotionVStack = ({ children, ...props }: { children: ReactNode }) => {
// 	return (
// 		<motion.div>
// 			<VStack {...props}>{children}</VStack>
// 		</motion.div>
// 	);
// };

// const MotionText = ({ children, ...props }: { children: ReactNode }) => {
// 	return (
// 		<motion.span>
// 			<Text {...props}>{children}</Text>
// 		</motion.span>
// 	);
// };

const CollapsibleSection = ({
	question,
	answer,
}: {
	question: string;
	answer: ReactNode;
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
			transition= "height 0.6s ease, border-radius 0.6s ease"
			mx="auto"
		>
			<MotionBox
				onClick={onToggle}
				minHeight="150px"
				alignItems="center"
				justifyContent="center"
				display="flex"
				p={{ base: 4, md: 6 }}
				bg="#D3D3D3"
				borderRadius={isOpen ? "8px 8px 0 0" : "md"}
				color="#070F2D"
				fontFamily="Kufam"
				fontWeight="semibold"
				textTransform="none"
				border="none"
				style={{
					cursor: "pointer",
				}}
				transition= "height 0.6s ease, border-radius 0.6s ease"
			>
				<MotionText
					color="inherit"
					fontFamily="Kufam"
					fontWeight="semibold"
					textTransform="none"
					fontSize={{ base: "4vw", md: "2vw" }}
				>
					{question}
				</MotionText>
			</MotionBox>
			<AnimatePresence>
				{isOpen && (
					<MotionBox
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition="duration 0.6"
						style={{
							overflow: "hidden",
							backgroundColor: "#ab9e9e",
							borderRadius: "0 0 8px 8px",
							marginTop: 0,
						}}
					>
						<MotionVStack
							alignItems="start"
							p={{ base: 4, md: 6 }}
							borderRadius="0 0 8px 8px"
							boxShadow="md"
							style={{ overflow: "hidden" }}
						>
							<MotionText
								color="white"
								fontFamily="Kufam"
								fontWeight="semibold"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition="duration: 0.6"
								textAlign="center"
								fontSize={{ base: "3vw", md: "1vw" }}
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