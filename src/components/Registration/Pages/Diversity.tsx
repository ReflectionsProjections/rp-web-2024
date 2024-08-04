import { Box, Flex, FormLabel, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import { PageProps } from "../../../routes/Registration";
import { TrueFalseCheckBoxInput } from "../inputs/SingleCheckboxInput";
import Config from "../../../config";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";

const DiversityValidator = Yup.object().shape({
	isFirstGen: Yup.boolean().required('Required'),
	ethnicity: Yup.array().of(Yup.string()).required('Required'),
	gender: Yup.string().required('Required'),
});

const DiversityDefaults = {
	isFirstGen: false,
	ethnicity: [],
	gender: "other",
};


export function Diversity ({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const formik = useFormik({
		initialValues: DiversityDefaults,
		validationSchema: DiversityValidator,

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
						<FormLabel htmlFor="isFirstGen"> Are you a first generation student? </FormLabel>
						<TrueFalseCheckBoxInput id="isFirstGen" name="isFirstGen" formik={formik} />

						<FormLabel htmlFor="gender"> What is your gender? </FormLabel>
						<MultiCheckBoxInput id="gender" name="gender" formik={formik} options={Config.REGISTRATION_ETHNICITIES}/> 

						<FormLabel htmlFor="ethnicity"> What is your ethicity? Select all that apply. </FormLabel>
						<MultiCheckBoxInput id="ethnicity" name="ethnicity" formik={formik} options={Config.REGISTRATION_ETHNICITIES}/> 
					</VStack>
				</Box>
				<Box h="10vh">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}

export default Diversity;