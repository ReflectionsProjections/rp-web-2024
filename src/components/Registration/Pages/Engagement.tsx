import { Box, Flex, FormLabel, VStack, useMediaQuery } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import Config from "../../../config";
import { PageProps } from "../../../routes/Registration";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import { TrueFalseSwitchInput } from "../inputs/SingleCheckboxInput";

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
			email: "",
			name: "",
			allergies: [],
			dietaryRestrictions: [],
		};
	}

	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const formik = useFormik({
		initialValues: EngagementDefaults,
		validationSchema: EngagementValidator,
		enableReinitialize: true,

		onSubmit: (values) => {
			setAttendeeData(values);
			alert(JSON.stringify(values, null, 2));
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px": "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" maxHeight='750px' height="auto" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"}>
					<VStack spacing={4} align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<FormLabel htmlFor="isInterestedPuzzleBang"> Are you interested in PuzzleBang? </FormLabel>
						<TrueFalseSwitchInput id="isInterestedPuzzleBang" name="isInterestedPuzzleBang" formik={formik} />

						<FormLabel htmlFor="isInterestedMechMania"> Are you interested in MechMania? </FormLabel>
						<TrueFalseSwitchInput id="isInterestedMechMania" name="isInterestedMechMania" formik={formik} />

						<FormLabel htmlFor="referralSource"> How did you learn about Reflections|Projections? </FormLabel>
						<MultiCheckBoxInput id="referralSource" name="referralSource" formik={formik} options={Config.REGISTRATION_REFERRAL_SOURCE}/> 
					</VStack>
				</Box>
				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}

export default Engagement;