import { Box, Flex } from '@chakra-ui/react';
import '@fontsource/kufam';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/nunito';
import PageTitle from "../components/Home/PageTitle";
import { EventTabs } from "../components/Events/EventTabs";

import BackgroundPattern from "/Events/event_background.svg";

export function Events() {
	return (
		<Box
			position="relative"
			bgImage={`url(${BackgroundPattern})`}
			bgSize="100% auto"
			bgRepeat="no-repeat"
			bgPosition="top"
			bgAttachment="scroll"
			width="100%"
			minHeight="100vh"
			justifyContent="center"
			display="flex"
			flexDirection="column"
			alignContent="center"
			backgroundColor="#004970"
		>
			<Flex direction="column" position="relative">
				<PageTitle title="EVENTS" />

				<EventTabs />
			</Flex>
		</Box>
	);
}

export default Events;
