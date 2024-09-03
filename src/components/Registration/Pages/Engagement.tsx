import { Box, Checkbox, Flex, FormLabel, Grid, GridItem, Text, VStack, useMediaQuery } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import Config from "../../../config";
import { PageProps } from "../../../routes/Registration";
import CurrentPage from "../CurrentPage";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";

const EngagementValidator = Yup.object().shape({
	isInterestedMechMania: Yup.boolean().required('Required'),
	isInterestedPuzzleBang: Yup.boolean().required('Required'),
});

export function Engagement({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	let EngagementDefaults;

	try {
		EngagementDefaults = EngagementValidator.validateSync(attendeeData);
	} catch (err) {
		EngagementDefaults = {
			isInterestedMechMania: false,
			isInterestedPuzzleBang: false,
		};
	}

	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const formik = useFormik({
		initialValues: EngagementDefaults,
		validationSchema: EngagementValidator,
		enableReinitialize: true,

		onSubmit: (values) => {
			setAttendeeData(values);
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px": "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" height="auto" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"}>
					<VStack spacing={'19px'} align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<CurrentPage pageNo={pageNo} />

						<Text fontSize='18px' fontFamily='Kufam' fontWeight="900" mb={0}>Select IF:</Text>
						<Grid gridTemplateColumns={isSmall ? "1fr" : '1fr 1fr'} gap={3} pl={'30px'} mb="32px" w="100%" maxWidth={"700px"}>
							<GridItem w='100%'>
								<FormLabel fontFamily='Kufam' fontWeight="900"  mb={0} fontSize='18px' htmlFor="isInterestedPuzzleBang">I am interested in <Text fontSize='18px' as='a' target="_blank" rel="noopener noreferrer" color="pink.100" style={{ textDecoration: 'underline'}} _hover={{ color: "pink.300" }} href= "https://puzzlebang.com/">PuzzleBang</Text></FormLabel>
							</GridItem>
							<GridItem w='10%'>
								<Checkbox id="isInterestedPuzzleBang" name="isInterestedPuzzleBang" onBlur={formik.handleBlur} borderColor='white' onChange={formik.handleChange} size={'lg'}/>
							</GridItem>
							<GridItem w='100%'>
								<FormLabel fontFamily='Kufam' fontWeight="900"  mb={0} fontSize='18px' htmlFor="isInterestedMechMania">I am interested in <Text fontSize='18px' as='a' target="_blank" rel="noopener noreferrer" color="pink.100" style={{ textDecoration: 'underline'}} _hover={{ color: "pink.300" }} href= "https://www.mechmania.org/">MechMania</Text></FormLabel>
							</GridItem>
							<GridItem w='10%' ml="0" alignItems={"start"}>
								<Checkbox id="isInterestedMechMania" name="isInterestedMechMania" onBlur={formik.handleBlur} borderColor='white' onChange={formik.handleChange} size={'lg'} />
							</GridItem>
						</Grid>


						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900"  htmlFor="hearAboutRP" fontSize='18px'> How did you learn about Reflections | Projections? </FormLabel>
							<MultiCheckBoxInput id="hearAboutRP" name="hearAboutRP" formik={formik} options={Config.REGISTRATION_REFERRAL_SOURCE}/>
						</Box>
					</VStack>
				</Box>
				<Box h="140px" mb={isSmall ? "0px" : "150px"}>
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}

export default Engagement;