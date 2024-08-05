import { Box, Flex, FormLabel, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import Config from "../../../config";
import { PageProps } from "../../../routes/Registration";
import DropdownSelect from "../inputs/AutoDropdownInput";
import { colleges } from "../inputs/colleges";
import { majors } from "../inputs/majors";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import { SelectInput } from "../inputs/SelectInput";

const CareerProfileValidator = Yup.object().shape({
	university: Yup.string().required('Required'),
	major: Yup.string().required('Required'),
	graduationYear: Yup.string().length(4).required('Required'),
});

const CareerProfileDefaults = {
	university: "",
	major: "",
	graduationYear: "",
};


export default function Career({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const formik = useFormik({
		initialValues: CareerProfileDefaults,
		validationSchema: CareerProfileValidator,

		onSubmit: (values) => {
			setAttendeeData({ ...values, attendeeData });
			alert(JSON.stringify(values, null, 2));
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt="61px">
			<form onSubmit={formik.handleSubmit}>
				<Box bg='#2C587E' textColor='white' fontFamily='Kufam' p={6} rounded="md" minH="calc(100vh - 145px)">
					<VStack spacing={4} align="flex-start">
						<FormLabel htmlFor="university"> What school do you go to? </FormLabel>
						<DropdownSelect id="university" name="university" formik={formik} options={colleges} />

						<FormLabel htmlFor="major"> What is your current (or intended) major? </FormLabel>
						<DropdownSelect id="major" name="major" formik={formik} options={majors} />

						<FormLabel htmlFor="graduationYear"> When do you graduate? </FormLabel>
						<SelectInput id="graduationYear" name="graduationYear" formik={formik} options={Config.REGISTRATION_GRADUATION_YEARS} />

						<FormLabel htmlFor="openTo"> What opportunities are you open to? </FormLabel>
						<MultiCheckBoxInput id="openTo" name="openTo" formik={formik} options={Config.REGISTRATION_OPEN_TO} />
					</VStack>
				</Box>
				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}