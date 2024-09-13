import { Box, Image, HStack, VStack } from "@chakra-ui/react";
import '@fontsource/kufam';
import PageTitle from "./PageTitle";

import Motorola_Card from '/Sponsors/motorola_card.svg';
import Eli_Lilly_Card from '/Sponsors/eli_lilly_card.svg';
import Caterpiller_Card from '/Sponsors/caterpiller_card.svg';
import Bottom_Left_Card from '/Sponsors/bottom_left_card.svg';
import Bottom_Right_Card from '/Sponsors/bottom_right_card.svg';

export function Sponsors() {
	return (
		<Box
			width="100%"
			justifyContent="center"
			backgroundColor="#004970"
		>
			<PageTitle title="SPONSORS" />

			<Box
				p="4vw"
				width="100%"
				justifyContent="center"
				backgroundColor="#004970"
				backgroundImage="repeating-linear-gradient(0deg, #004970 0px, #004970 50px, #0275A7 50px, #0275A7 80px)"
			>
				<VStack spacing={"min(4vw, 40px)"} align="center" justify="center">
					<HStack spacing={"min(4vw, 40px)"} align="flex-end" justify="center">
						<Box
							width="50vw"
							height="auto"
							maxWidth="500px"  // Set a maximum width for larger screens
						>
							<Image
								src={Motorola_Card}
								alt="Motorola"
								style={{ width: '100%', height: 'auto' }}  // Let the height adjust automatically
							/>
						</Box>
						<Box
							width="38vw"
							height="auto"
							maxWidth="380px"  // Set a maximum width for larger screens
						>
							<Image
								src={Eli_Lilly_Card}
								alt="Eli Lilly"
								style={{ width: '100%', height: 'auto' }}  // Let the height adjust automatically
							/>
						</Box>
					</HStack>
					<Box
						width="92vw"
						height="auto"
						maxWidth="920px"  // Set a maximum width for larger screens
					>
						<Image
							src={Caterpiller_Card}
							alt="Caterpillar"
							style={{ width: '100%', height: 'auto' }}  // Let the height adjust automatically
						/>
					</Box>
					<HStack spacing="min(4vw, 40px)" align="flex-start" justify="center">
						<Box
							width="48vw"
							height="auto"
							maxWidth="480px"  // Set a maximum width for larger screens
						>
							<Image
								src={Bottom_Left_Card}
								alt="Bottom Left Sponsors"
								style={{ width: '100%', height: 'auto' }}  // Let the height adjust automatically
							/>
						</Box>
						<Box
							width="40vw"
							height="auto"
							maxWidth="400px"  // Set a maximum width for larger screens
						>
							<Image
								src={Bottom_Right_Card}
								alt="Bottom Right Sponsors"
								style={{ width: '100%', height: 'auto' }}  // Let the height adjust automatically
							/>
						</Box>
					</HStack>
				</VStack>
			</Box>
		</Box>
	);
}

export default Sponsors;