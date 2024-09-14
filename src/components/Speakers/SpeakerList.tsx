import { Flex } from "@chakra-ui/react";
import speakers from './speakers.json';

import SpeakerCard from './SpeakerCard';

export const SpeakerList = () => {

	return (
		<Flex flexDirection="column" alignItems="center" width="100%">
			{speakers.map((speaker, index) => (
				<SpeakerCard
					key={index}
					name={speaker.speakerName}
					company={speaker.company}
					role={speaker.role}
					description={speaker.speakerBio}
					speakerImg={speaker.speakerImg}
				/>
			))
			}
		</Flex>
	);
};

export default SpeakerList;
