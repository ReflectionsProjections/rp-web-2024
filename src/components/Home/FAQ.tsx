import {
	Box,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useMediaQuery,
	Grid,
	GridItem,
	Center,
} from "@chakra-ui/react";
import "@fontsource/kufam/900-italic.css";
import faq_bg from "/faq_bg.svg";
import faq_roll from "/faq_roll.svg";
import PageTitle from "./PageTitle";
import { useState, useEffect, useRef, ReactNode } from "react";
import CollapsibleSection from "./FAQbox";

import InfoDecor from "/Info/film.svg";

type Tuple = {front: string, back: ReactNode};

const hyperlinkStyles = (isMobile: boolean) => ({
	textDecoration: "underline",
	color: isMobile ? "#0077FF" : "#00d4ff", // Change color based on screen size
	fontWeight: "normal",
});
  

export default function FAQ() {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	const faq: Tuple[] = [
		{
			front: "What is Reflections | Projections?",
			back: "Reflections | Projections (R|P) is the largest student-run tech conference in the Midwest, bringing together students, industry leaders, and professionals from all over the world. Join us for an exciting week of speaker talks, workshops, a career fair, and other intriguing opportunities! All of R|P is designed to allow participants to reflect upon their experiences and project towards their future.",
		},
		{
			front: "Who can attend R|P?",
			back: "R|P is open to everyone over the age of 18. Registering and attending R|P is open to all majors and class levels and is completely free!",
		},
		{
			front: "When and where are R|P's events held?",
			back: "Reflections | Projections 2024 will be from Wednesday, September 18 to Sunday, September 22!",
		},
		{
			front: "What do I need to do before R|P?",
			back: "It's simple: register (it's completely free!) and download the brand new Reflections | Projections app (coming soon on the App Store and Google Play Store). Just like that, you're all set to attend events and retrieve free swag/merch!",
		},
		{
			front: "What is the pixel system?",
			back: "The pixel system is our new way of rewarding dedicated R|P attendees with exclusive merch and prizes. Attending events throughout R|P will earn you pixels, and pixels can be redeemed for various free prizes. You can monitor your pixel status via your account in the Reflections | Projections app.",
		},
		{
			front: "Why should I attend R|P?",
			back: "Attending R|P is the best way to learn about the current status of the tech industry and where the field is headed in the future. R|P aims to bridge the gap between industry and academia through valuable networking opportunities, and you might even leave with an internship or full-time job (based on true events!). Last but not least, we have free food available every day!",
		},
		{
			front: "Where are R|P's events held?",
			back: "Every event of R|P 2024 will be held in the Siebel Center for Computer Science (201 N Goodwin Ave, Urbana, IL 61801). Our calendar contains the specific room for each event.",
		},
		{
			front: "What are MechMania and PuzzleBang?",
			back: (
				<>
					MechMania is R|P's 24 hour AI hackathon that allows students to work in teams to build a bot that can play a new game. MechMania is open to all levels of coding and you can register at <a
						href="https://mechmania.org"
						target="_blank"
						style={hyperlinkStyles(isMobile)}
					>
						mechmania.org
					</a>.<br/>PuzzleBang is both a series of puzzles during the week of R|P (Monday - Saturday) and also an escape room on Saturday. You can register at{" "}
					<a
						href="https://puzzlebang.com"
						target="_blank"
						style={hyperlinkStyles(isMobile)}
					>
						puzzlebang.com
					</a>.
				</>
			),
		},
		{
			front: "How can I get involved with R|P?",
			back: (
				<>
					The best way to get involved with R|P beyond attending events is by
					being a volunteer! Every year our volunteers are crucial in ensuring
					that all R|P events are running smoothly. Volunteers are able to gain
					valuable experience with event planning and logistics and is a great
					first step to getting more involved with the planning of R|P. Sign up to
					volunteer at{" "}
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSe1ulK3WhdYzv1s4TY8O4JXUMDojMP1bl5SzjExwpzEHA0zFA/viewform?usp=sf_link"
						target="_blank"
						rel="noopener noreferrer"
						style={hyperlinkStyles(isMobile)}
					>
						this link
					</a>
					. We also open applications for R|P staff in January.
				</>
			),
		},
	];

	const { isOpen, onOpen, onClose } = useDisclosure();

	// const [setBoxHeight] = useState(0);
	const [scrollHeight, setScrollHeight] = useState(true);
	const coloredBoxRef = useRef<HTMLDivElement>(null);
	// const [isExpanded, setIsExpanded] = useState(false);
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const handleBoxClick = (index: any) => {
		if (index === expandedIndex) {
			setExpandedIndex(null);
			onClose();
		} else {
			setExpandedIndex(index);
			onOpen();
		}
	};

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				console.log("Observed height:", entry.contentRect.height);
				// setBoxHeight(entry.contentRect.height);
			}
		});

		if (coloredBoxRef.current) {
			resizeObserver.observe(coloredBoxRef.current);
		}

		return () => {
			if (coloredBoxRef.current) {
				resizeObserver.unobserve(coloredBoxRef.current);
			}
		};
	}, []);

	if (isMobile) {
		return (
			<Box
				width="100%"
				minHeight="100vh"
				justifyContent="center"
				display="flex"
				flexDirection="column"
				alignContent="center"
				backgroundColor="#004970"
			>
				<PageTitle title="FAQ" />

				<Center>
					<Box
						onClick={() => setScrollHeight(!scrollHeight)}
						width="15vw"
						height="15vw"
						minHeight={"43vw"}
						minWidth={"91vw"}
						bgSize="100% 100%"
						bgRepeat="no-repeat"
						position="absolute"
						zIndex={1}
						bgImage={faq_roll}
						transform={"translate(5vw, 0px)"}
						mt="45vw"
					></Box>
				</Center>

				<Box
					p={8}
					m="15vw"
					mt="38vw"
					bgImage={InfoDecor}
					bgSize="100% auto"
					bgRepeat="repeat-y"
				>
					<Box
						p={4}
						minHeight="100px"
						position="relative"
						ref={coloredBoxRef}
						opacity={scrollHeight ? "1" : "0"}
						height={scrollHeight ? "" : "0"}
						transition="height 2.6s ease"
					>
						{faq.map((qa, index) => (
							<Box
								key={index}
								width="90%"
								mb={4}
								mx="auto"
								height={scrollHeight ? "" : "0"}
							>
								<CollapsibleSection question={qa.front} answer={qa.back} />
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		);
	}
	return (
		<Box
			width="100%"
			minHeight="100vh"
			justifyContent="center"
			display="flex"
			flexDirection="column"
			alignContent="center"
			backgroundColor="#004970"
		>
			<PageTitle title="FAQ" />
			<Box
				position="relative"
				minHeight="90vw"
				minWidth="90vw"
				bgImage={faq_bg}
				bgSize="100% 100%"
				bgRepeat="no-repeat"
				m="5vw"
				display="flex"
				justifyContent="center"
			>
				<Box
					top="0"
					right="0"
					bottom="0"
					display="flex"
					alignItems="flex-start"
					justifyContent="center"
					zIndex="1"
					marginTop="13vw"
					// width="68%"
					// height="45%"
				>
					<Grid
						templateColumns="repeat(3, 1fr)"
						gap={10}
						width="68vw"
						height="45vw"
					>
						{faq.map((item, index) => (
							<GridItem
								key={index}
								position="relative"
								width="100%"
								height="100%"
								onClick={() =>
									setExpandedIndex(index === expandedIndex ? null : index)
								}
							>
								<Box
									position="relative"
									width="100%"
									height="100%"
									cursor={"pointer"}
									onClick={() => handleBoxClick(index)}
								>
									<Box
										position="absolute"
										width="100%"
										height="100%"
										sx={{
											backfaceVisibility: "hidden",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											bgGradient: "linear(to bottom right, #289696, #173B4B)",
											fontFamily: "Kufam, sans-serif",
											textAlign: "center",
											lineHeight: "1.2",
											color: "white",
											borderRadius: "md",
											border: "1px solid white",
											padding: "20px",
										}}
									>
										<div
											style={{
												opacity: 0.8,
												fontSize: "2vw",
												background:
													"linear-gradient(115deg, #FFFFFF, #EAEAEA, #4EADCA, #1DA6EC)",
												color: "transparent",
												backgroundClip: "text",
											}}
										>
											{item.front}
										</div>
									</Box>
									{expandedIndex === index && (
										<Modal
											isOpen={isOpen}
											onClose={onClose}
											size="lg"
											isCentered
										>
											<ModalOverlay />
											<ModalContent
												sx={{
													transform: isOpen ? "scale(1)" : "scale(0.1)",
													transition:
														"transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
												}}
											>
												<ModalCloseButton style={{ color: "white" }} />
												<ModalBody
													sx={{
														backfaceVisibility: "hidden",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														bgGradient:
															"linear(to bottom right, #289696, #173B4B)",
														fontFamily: "Kufam, sans-serif",
														textAlign: "center",
														lineHeight: "1.2",
														color: "white",
														borderRadius: "md",
														border: "1px solid white",
														padding: "30px",
													}}
												>
													<Text
														style={{
															opacity: 0.8,
															background:
																"linear-gradient(115deg, #FFFFFF, #EAEAEA, #4EADCA, #1DA6EC)",
															color: "transparent",
															backgroundClip: "text",
														}}
													>
														{item.back}
													</Text>
												</ModalBody>
											</ModalContent>
										</Modal>
									)}
								</Box>
							</GridItem>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
