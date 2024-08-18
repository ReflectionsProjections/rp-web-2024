import { Box, Flex, FormLabel, useMediaQuery, VStack } from "@chakra-ui/react";
import * as Yup from "yup";


import { useFormik } from "formik";
import { Pagination } from "../Pagination";

import Config from "../../../config";
import { PageProps } from "../../../routes/Registration";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import { MultiSelectInput } from "../inputs/MultiSelectInput";
import { ResumeUpload } from "../inputs/ResumeUpload";

const CareerProfileValidator = Yup.object().shape({
	portfolios: Yup.array().of(Yup.string().url()).required('Required').max(5),
});

export default function Career({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	let CareerProfileDefaults;

	try {
		CareerProfileDefaults = CareerProfileValidator.validateSync(attendeeData);
	} catch (err) {
		CareerProfileDefaults = {
			portfolios: [],
			jobInterest: [],
		};
	}

	const formik = useFormik({
		initialValues: CareerProfileDefaults,
		validationSchema: CareerProfileValidator,
		enableReinitialize: true,
		onSubmit: (values) => {
			setAttendeeData({ ...values, ...attendeeData });
			alert(JSON.stringify(values, null, 2));
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px" : "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"} maxHeight='750px'>
					<VStack spacing={4} align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<FormLabel htmlFor="jobInterest"> What opportunities are you open to? </FormLabel>
						<MultiCheckBoxInput id="jobInterest" name="jobInterest" formik={formik} options={Config.REGISTRATION_OPEN_TO} />

						<FormLabel htmlFor="portfolios"> Add up to 5 personal links! </FormLabel>
						<MultiSelectInput id="portfolios" name="portfolios" formik={formik} />

						<FormLabel htmlFor="resume"> Upload your resume: </FormLabel>
						<ResumeUpload id="resume" name="resume" formik={formik} />
					</VStack>
				</Box>
				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}