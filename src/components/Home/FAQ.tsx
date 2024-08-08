import { Box, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import "@fontsource/kufam/900-italic.css";
import faq_bg from "/faq_bg.svg";
import PageTitle from "./PageTitle";
import CollapsibleSection from "./FAQbox";

const  faq = [
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
	{
		front: "a sample question about r|p blah blah blah",
		back: "a sample answer about r|p blah blah blah",
	},
];

export default function FAQ() {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	if (isMobile) {
		return (
			<Box
				width="100%"
				height="200vh"
				justifyContent="center"
				display="flex"
				flexDirection="column"
				alignContent="center"
				backgroundColor="#004970"
			>
				<PageTitle title="FAQ" />

				<Box p={8}>
					{faq.map((qa, index) => (
						<CollapsibleSection
							key={index}
							question={qa.front}
							answer={qa.back}
						/>
					))}
				</Box>
			</Box>
		);
	}
	return (
		<Box
			width="100%"
			height="200vh"
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
							>
								<Box
									position="relative"
									width="100%"
									height="100%"
									sx={{
										transformStyle: "preserve-3d",
										transition: "transform 1.2s",
										_hover: { transform: "rotateY(180deg)" },
									}}
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
											fontFamily: "Kafum, sans-serif",
											fontWeight: "semibold",
											textAlign: "center",
											lineHeight: "1.2",
											color: "white",
											borderRadius: "md",
											border: "1px solid white",
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
									<Box
										position="absolute"
										width="100%"
										height="100%"
										sx={{
											backfaceVisibility: "hidden",
											padding: "2px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											bgGradient: "linear(to bottom right, #289696, #173B4B)",
											transform: "rotateY(180deg)",
											fontFamily: "Kafum, sans-serif",
											fontWeight: "semibold",
											textAlign: "center",
											lineHeight: "1.2",
											color: "white",
											borderRadius: "md",
											border: "0.5px solid white",
										}}
									>
										<div style={{ opacity: 0.8, fontSize: "2vw" }}>
											{item.back}
										</div>
									</Box>
								</Box>
							</GridItem>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
