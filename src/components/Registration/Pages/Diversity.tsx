import {
	Box,
	Flex,
	FormLabel,
	VStack,
	useMediaQuery,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import { PageProps } from "../../../routes/Registration";
import { TrueFalseCheckBoxInput } from "../inputs/SingleCheckboxInput";
import Config from "../../../config";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";

const DiversityValidator = Yup.object().shape({
	isFirstGen: Yup.boolean().required("Required"),
	ethnicity: Yup.array().of(Yup.string()).required("Required"),
	gender: Yup.string().required("Required"),
});

const DiversityDefaults = {
	isFirstGen: false,
	ethnicity: [],
	gender: "other",
};

export function Diversity({
	pageNo,
	goNextPage,
	goPrevPage,
	setAttendeeData,
	attendeeData,
}: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const formik = useFormik({
		initialValues: DiversityDefaults,
		validationSchema: DiversityValidator,

		onSubmit: (values) => {
			setAttendeeData({ ...values, attendeeData });
			alert(JSON.stringify(values, null, 2));
			console.log("here");
			goNextPage();
		},
	});

	return (
		<Flex
			direction="column"
			w="100%"
			align={"center center"}
			mt={isSmall ? "61px" : "90px"}
		>
			<form onSubmit={formik.handleSubmit}>
				<Box
					textColor="white"
					fontFamily="Kufam"
					p={6}
					pb={0}
					rounded="md"
					minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"}
					maxHeight="750px"
				>
					<VStack
						spacing={4}
						align="flex-start"
						margin="10vw"
						marginTop="4vh"
						marginBottom="0"
					>
						<FormLabel htmlFor="isFirstGen">
							{" "}
							Are you a first generation student?{" "}
						</FormLabel>
						<TrueFalseCheckBoxInput
							id="isFirstGen"
							name="isFirstGen"
							formik={formik}
						/>

						<FormLabel htmlFor="gender"> What is your gender? </FormLabel>
						<RadioGroup
							name="gender"
							value={formik.values.gender}
							onChange={(value) => formik.setFieldValue("gender", value)}
						>
							{Config.REGISTRATION_ETHNICITIES.map((option) => (
								<Radio key={option} value={option}>
									{option}
								</Radio>
							))}
						</RadioGroup>

						<FormLabel htmlFor="ethnicity">
							{" "}
							What is your ethicity? Select all that apply.{" "}
						</FormLabel>
						<MultiCheckBoxInput
							id="ethnicity"
							name="ethnicity"
							formik={formik}
							options={Config.REGISTRATION_ETHNICITIES}
						/>
					</VStack>
				</Box>
				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
				</Box>
			</form>
		</Flex>
	);
}

export default Diversity;
