import { Box, HStack } from "@chakra-ui/react";


export default function CurrentPage({ pageNo }: { pageNo: number }) {
	return (
		<HStack width={'100%'} align={"center center"} justifyContent={'center'}>
			{Array.from({ length: 5 }, (_, index) => (
				<Box
					key={index}
					minHeight={'13px'}
					minWidth={'13px'}
					borderColor={'#F4B255'}
					border={"2px #F4B255 solid"}
					bg={index === pageNo ? '#F4B255' : 'transparent'}
				></Box>
			))}
		</HStack>
	);
}