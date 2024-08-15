import { Box, Checkbox, Flex, FormLabel, VStack, useMediaQuery } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { FormInput } from "../inputs/FormInput";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import { MultiSelectInput } from "../inputs/MultiSelectInput";
import { Pagination } from "../Pagination";
import { PageProps } from "../../../routes/Registration";
import Config from "../../../config";
import '@fontsource/kufam/900-italic.css';

const AttendeeInformationValidator = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	allergies: Yup.array().of(Yup.string()).required('Required').max(5),
	dietaryRestrictions: Yup.array().of(Yup.string()).required('Required'),
});

export function AttendeeInformation({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	let attendeeInformationDefaults;

	try {
		attendeeInformationDefaults = AttendeeInformationValidator.validateSync(attendeeData);
	} catch (err) {
		attendeeInformationDefaults = {
			email: "",
			name: "",
			allergies: [],
			dietaryRestrictions: [],
		};
	}

	const formik = useFormik({
		initialValues: attendeeInformationDefaults,
		validationSchema: AttendeeInformationValidator,
		onSubmit: (values) => {
			setAttendeeData({ ...values, attendeeData });
			alert(JSON.stringify(values, null, 2));
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px": "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"} maxHeight='750px'>
					<VStack spacing={4} align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<FormLabel htmlFor="name"> Name </FormLabel>
						<FormInput id="name" name="name" type="text" formik={formik} />

						<FormLabel htmlFor="email">Email</FormLabel>
						<FormInput id="email" name="email" type="text" formik={formik} />

						<FormLabel htmlFor="dietaryRestrictions">Do you have any dietary restrictions?</FormLabel>
						<MultiCheckBoxInput id="dietaryRestrictions" name="dietaryRestrictions" options={Config.REGISTRATION_DIETARY_RESTRICTIONS} formik={formik} />

						<FormLabel htmlFor="allergies">Do you have any allergies?</FormLabel>
						<MultiSelectInput id="allergies" name="allergies" formik={formik} />

						<Flex alignItems={"center center"}>
							<FormLabel htmlFor="over18">Are you over 18 years old?</FormLabel>
							<Checkbox id="over18" defaultChecked> Checkbox </Checkbox>
						</Flex>
					</VStack>
				</Box>

				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>

	);
}

export default AttendeeInformation;