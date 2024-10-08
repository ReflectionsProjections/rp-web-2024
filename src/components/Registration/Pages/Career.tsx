import { Box, Flex, FormLabel, useMediaQuery, VStack } from "@chakra-ui/react";
import * as Yup from "yup";


import { useFormik } from "formik";
import { Pagination } from "../Pagination";

import Config from "../../../config";
import { PageProps } from "../../../routes/Registration";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
// import { MultiSelectInput } from "../inputs/MultiSelectInput";
import { ResumeUpload } from "../inputs/ResumeUpload";
import CurrentPage from "../CurrentPage";
import { MultiLinkInput } from "../inputs/MultiLinkInput";

const CareerProfileValidator = Yup.object().shape({
	portfolios: Yup.array().of(Yup.string().url("Must be a valid URL")).required('Required').max(5),
	jobInterest: Yup.array().of(Yup.string())
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
			setAttendeeData(values);
			goNextPage();
		},
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px" : "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"}>
					<VStack spacing='19px' align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<CurrentPage pageNo={pageNo} />
						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" fontSize='18px' htmlFor="jobInterest"> What opportunities are you open to? </FormLabel>
							<MultiCheckBoxInput id="jobInterest" name="jobInterest" formik={formik} options={Config.REGISTRATION_OPEN_TO} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" fontSize='18px' htmlFor="resume"> Upload your resume (this can be updated later): </FormLabel>
							<ResumeUpload id="hasResume" name="hasResume" formik={formik} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" fontSize='18px' htmlFor="portfolios"> Add up to 5 personal links! </FormLabel>
							{/* <MultiSelectInput id="portfolios" name="portfolios" formik={formik} baseValue="https://www.example.com"/> */}
							<MultiLinkInput id="portfolios" name="portfolios" formik={formik} />
						</Box>

					</VStack>
				</Box>
				<Box h="140px" mb={isSmall ? "0px" :"150px"}>
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}
