import { Box, Flex, FormLabel, useMediaQuery, VStack } from "@chakra-ui/react";

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

const EducationProfileValidator = Yup.object().shape({
	university: Yup.string().required('Required'),
	major: Yup.string().required('Required'),
	graduationYear: Yup.string().length(4).required('Required'),
});

const EducationProfileDefaults = {
	university: "",
	major: "",
	graduationYear: "",
};


export default function Education({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const formik = useFormik({
		initialValues: EducationProfileDefaults,
		validationSchema: EducationProfileValidator,

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
						<FormLabel htmlFor="university"> What school do you go to? </FormLabel>
						<DropdownSelect id="university" name="university" formik={formik} options={colleges} />

						<FormLabel htmlFor="major"> What is your current (or intended) major? </FormLabel>
						<DropdownSelect id="major" name="major" formik={formik} options={majors} />

						<FormLabel htmlFor="graduationYear"> When do you graduate? </FormLabel>
						<SelectInput id="graduationYear" name="graduationYear" formik={formik} options={Config.REGISTRATION_GRADUATION_YEARS} />
					</VStack>
				</Box>
				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}