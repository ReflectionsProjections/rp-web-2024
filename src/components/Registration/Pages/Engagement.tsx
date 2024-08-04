import { Box, Flex, FormLabel, VStack } from "@chakra-ui/react";

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

const EngagementDefaults = {
	isInterestedMechMania: false,
	isInterestedPuzzleBang: false,
};


export function Engagement({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const formik = useFormik({
		initialValues: EngagementDefaults,
		validationSchema: EngagementValidator,

		onSubmit: (values) => {
			setAttendeeData({ ...values, attendeeData });
			alert(JSON.stringify(values, null, 2));
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt="10vh">
			<form onSubmit={formik.handleSubmit}>
				<Box bg='#2C587E' textColor='white' fontFamily='Kufam' p={6} rounded="md" h="80vh">
					<VStack spacing={4} align="flex-start">
						<FormLabel htmlFor="isInterestedPuzzleBang"> Are you interested in PuzzleBang? </FormLabel>
						<TrueFalseSwitchInput id="isInterestedPuzzleBang" name="isInterestedPuzzleBang" formik={formik} />

						<FormLabel htmlFor="isInterestedMechMania"> Are you interested in MechMania? </FormLabel>
						<TrueFalseSwitchInput id="isInterestedMechMania" name="isInterestedMechMania" formik={formik} />

						<FormLabel htmlFor="referralSource"> How did you learn about Reflections|Projections? </FormLabel>
						<MultiCheckBoxInput id="referralSource" name="referralSource" formik={formik} options={Config.REGISTRATION_REFERRAL_SOURCE}/> 
					</VStack>
				</Box>
				<Box h="10vh">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}

export default Engagement;