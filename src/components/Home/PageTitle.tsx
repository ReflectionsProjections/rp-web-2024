import { Text, Center, Box, useMediaQuery} from "@chakra-ui/react";

import headerBox from "/headerBox.svg";


export default function PageTitle({ title }: { title: string }) {
	const [isSmall] = useMediaQuery("(max-width: 800px)");
	return (
		<Center mt="10vh">
			<Box
				backgroundImage={headerBox}
				backgroundSize="cover"
				backgroundPosition="center"
				display="flex"
				alignItems="flex-start"
				maxWidth="800px"
				maxHeight="200px"
				width={isSmall ? "80vw" :"55vw"}
				height={isSmall ? "20vw" :"14vw"}
				margin={isSmall ? "3%" : "5%"}
				justifyContent={"center"}
				// paddingLeft="20px"
			>
				<Text fontSize={isSmall ? "9.5vw" : "min(6.5vw, 85px)"} color="#FFFBD5" fontFamily='Kufam' margin="6%" fontWeight="900" fontStyle="italic">
					{title}
				</Text>
			</Box>
		</Center>
	);
}