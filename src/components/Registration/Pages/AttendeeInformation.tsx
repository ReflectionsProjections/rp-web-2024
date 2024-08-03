import { Box, Button, FormLabel, VStack, Flex } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CheckBoxInput } from "../inputs/CheckboxInput";
import { FormInput } from "../inputs/FormInput";
import { MultiSelectInput } from "../inputs/MultiSelectInput";

const AttendeeInformationValidator = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	allergies: Yup.array().of(Yup.string()).required('Required'),
});

const AttendeeInformationDefaults = {
	email: "",
	name: "",
	allergies: [],
	dietaryRestrictions: [],
};

export function AttendeeInformation() {
	const formik = useFormik({
		initialValues: AttendeeInformationDefaults,
		validationSchema: AttendeeInformationValidator,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt="10vh">
			<Box bg="white" p={6} rounded="md" h="90vh" >
				<form onSubmit={formik.handleSubmit}>
					<VStack spacing={4} align="flex-start">
						<FormLabel htmlFor="name"> Name </FormLabel>
						<FormInput id="name" name="name" type="text" formik={formik} />

						<FormLabel htmlFor="email">Email</FormLabel>
						<FormInput id="email" name="email" type="text" formik={formik} />

						<FormLabel htmlFor="dietary-restrictions">Do you have any dietary restrictions?</FormLabel>
						<MultiSelectInput id="dietary-restrictions" name="dietary-restrictions" type="text" formik={formik} />

						<FormLabel htmlFor="allergies">Do you have any allergies?</FormLabel>
						<CheckBoxInput id="allergies" name="allergies" type="text" formik={formik} />

						<Button type="submit" colorScheme="purple" width="full">
						Login
						</Button>
					</VStack>
				</form>
			</Box>
		</Flex>
	);
}

export default AttendeeInformation;