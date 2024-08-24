import {
	Box,
	Flex,
	FormLabel,
	VStack,
	useMediaQuery,
	Radio,
	RadioGroup,
	SimpleGrid,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import { PageProps } from "../../../routes/Registration";
import { TrueFalseCheckBoxInput } from "../inputs/SingleCheckboxInput";
import Config from "../../../config";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import CurrentPage from "../CurrentPage";

const DiversityValidator = Yup.object().shape({
	ethnicity: Yup.array().of(Yup.string()),
	gender: Yup.string(),
});


export function Diversity({
	pageNo,
	goNextPage,
	goPrevPage,
	setAttendeeData,
	attendeeData,
}: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	let DiversityDefaults;

	try {
		DiversityDefaults = DiversityValidator.validateSync(attendeeData);
	} catch (err) {
		DiversityDefaults = {
			ethnicity: [],
			gender: "other",
		};
	}

	const formik = useFormik({
		initialValues: DiversityDefaults,
		validationSchema: DiversityValidator,
		enableReinitialize: true,
		onSubmit: (values) => {
			setAttendeeData(values);
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
						spacing='19px'
						align="flex-start"
						margin="10vw"
						marginTop="4vh"
						marginBottom="0"
					>
						<CurrentPage pageNo={pageNo} />
						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900"  htmlFor="gender"> What is your gender? </FormLabel>
							<RadioGroup
								name="gender"
								value={formik.values.gender}
								onChange={(value) => formik.setFieldValue("gender", value)}
							>
								<SimpleGrid spacing={4} w="100%" columns={isSmall ? 1 : 2}>
									{Config.REGISTRATION_GENDERS.map((option) => (
										<Radio key={option} value={option} borderColor='white' wordBreak={'break-word'}>
											{option.toUpperCase()}
										</Radio>
									))}
								</SimpleGrid>
							</RadioGroup>
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900"  htmlFor="ethnicity">
								{" "}
							What is your ethicity? Select all that apply.{" "}
							</FormLabel>
							<MultiCheckBoxInput
								id="ethnicity"
								name="ethnicity"
								formik={formik}
								options={Config.REGISTRATION_ETHNICITIES}
							/>
						</Box>


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
