import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import "@fontsource/kufam/900-italic.css";
import faq_bg from "../../../public/faq_bg.svg";
import PageTitle from "./PageTitle";

const gridItems = [
	{ front: 'aa sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
	{ front: 'a sample question about r|p blah blah blah', back: 'a sample answer about r|p blah blah blah' },
];

export default function FAQ() {
	return (
		<Box
			width="100%"
			height="200vh"
			justifyContent="center"
			display='flex'
			flexDirection='column'
			alignContent='center'
			backgroundColor="#004970"
		>
			<PageTitle title="FAQ" />
			<Box position="relative" minHeight="90vw" minWidth="90vw" bgImage={faq_bg} bgSize="100% 100%" bgRepeat="no-repeat" m="5vw" display='flex' justifyContent='center'>
				{/* <Image
					src={faq_bg}
					width="90%"
					height="90%"
					zIndex="0"
				/> */}
				<Box
					// position="absolute"
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
						{gridItems.map((item, index) => (
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
											fontFamily: 'Kafum, sans-serif',
											fontWeight: 'semibold', 
											textAlign: 'center', 
											lineHeight: '1.2', 
											color: 'white',
											borderRadius: 'md',
											border: '1px solid white'
										}}
									>
										<div style={{ opacity: 0.8 , fontSize: '2vw'}}>{item.front}</div>
									</Box>
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
											transform: "rotateY(180deg)",
											fontFamily: 'Kafum, sans-serif', 
											fontWeight: 'semibold', 
											textAlign: 'center',
											lineHeight: '1.2',
											color: 'white',
											borderRadius: 'md',
											border: '1px solid white'
										}}
									>
										<div style={{ opacity: 0.8, fontSize: '2vw'}}>{item.back}</div>
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
