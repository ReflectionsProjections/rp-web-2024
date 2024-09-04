import { Box, Flex, FormLabel, useMediaQuery, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import Config from "../../../config";
import { PageProps } from "../../../routes/Registration";
import DropdownSelect from "../inputs/AutoDropdownInput";
import { colleges } from "../inputs/colleges";
import { majors } from "../inputs/majors";
import { SelectInput } from "../inputs/SelectInput";
import CurrentPage from "../CurrentPage";

const EducationProfileValidator = Yup.object().shape({
	university: Yup.string().required('Required'),
	major: Yup.string().required('Required'),
	graduation: Yup.string().required('Required').notOneOf(["Select Graduation Date!"], "Must be a valid date!"),
});

export default function Education({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	let EducationProfileDefaults;

	try {
		EducationProfileDefaults = EducationProfileValidator.validateSync(attendeeData);
	} catch (err) {
		EducationProfileDefaults = {
			university: "",
			major: "",
			graduation: ""
		};
	}
	const formik = useFormik({
		initialValues: EducationProfileDefaults,
		validationSchema: EducationProfileValidator,
		enableReinitialize: true,

		onSubmit: (values) => {
			setAttendeeData(values);
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px": "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"} >
					<VStack spacing='19px' align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<CurrentPage pageNo={pageNo} />
						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" fontSize='18px' htmlFor="university"> What school do you go to? <span style={{ color: 'red' }}>*</span></FormLabel>
							<DropdownSelect id="university" name="university" formik={formik} options={colleges} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" fontSize='18px' htmlFor="major"> What is your current (or intended) major? <span style={{ color: 'red' }}>*</span></FormLabel>
							<DropdownSelect id="major" name="major" formik={formik} options={majors} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" fontSize='18px' htmlFor="graduation"> When do you graduate? <span style={{ color: 'red' }}>*</span></FormLabel>
							<SelectInput id="graduation" name="graduation" formik={formik} options={Config.REGISTRATION_GRADUATION_YEARS} />
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