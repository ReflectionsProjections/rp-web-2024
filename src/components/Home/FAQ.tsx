import { Box, SimpleGrid, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import { jeapordyBox, bigBox, smallBox } from "../../customTheme";
import "@fontsource/kufam/900-italic.css";
import faq_bg from "../../../public/faq_bg.svg";
import PageTitle from "./PageTitle";

export default function FAQ() {
	return (
		<Box
			width="100%"
			height="200vh"
			justifyContent="center"
			backgroundColor="#004970"
		>
			<PageTitle title="FAQ" />
			<Box position="relative" height="100vh" width="100%">
				<Image
					src={faq_bg}
					objectFit="cover"
					position="absolute"
				/>
				<Box
					position="relative"
					height="100%"
					width="100%"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Grid
						templateColumns="repeat(3, 1fr)"
						gap={4}
						width="80%"
						height="80%"
					>
						{Array.from({ length: 9 }).map((_, index) => (
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
											borderRadius: "md",
											bgGradient: "linear(to-r, red.500, yellow.500)",
										}}
									>
										<div>{index + 1} dev</div>
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
											borderRadius: "md",
											bgGradient: "linear(to-r, blue.500, green.500)",
											transform: "rotateY(180deg)",
										}}
									>
										<div>{index + 1} patel</div>
									</Box>
								</Box>
							</GridItem>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>

		// </Box>
	);
}
