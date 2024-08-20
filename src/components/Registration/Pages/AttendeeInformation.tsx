import { Box, Checkbox, Flex, FormLabel, Grid, GridItem, VStack, useMediaQuery } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { FormInput } from "../inputs/FormInput";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import { MultiSelectInput } from "../inputs/MultiSelectInput";
import { Pagination } from "../Pagination";
import { PageProps } from "../../../routes/Registration";
import CurrentPage from "../CurrentPage";
import Config from "../../../config";
import '@fontsource/kufam/900.css';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AttendeeInformationValidator = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	allergies: Yup.array().of(Yup.string()).required('Required').max(5),
	dietaryRestrictions: Yup.array().of(Yup.string()).required('Required'),
});

export function AttendeeInformation({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData, jwt }: PageProps) {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [seenNext, setSeenNext] = useState(false);
	const [eligibleButton, setEligibleButton] = useState(false);

	const [email, setEmail] = useState("");

	interface JwtPayload {
		email: string;
	}

	useEffect(() => {
		try {
			const decodedToken = jwtDecode(jwt) as JwtPayload;
			setEmail(decodedToken.email);
			formik.setFieldValue("email", decodedToken.email);
		} catch (e) {
			console.error(e);
		}
	}, [jwt, email]);

	useEffect(() => {
		const newVal = attendeeData?.university !== "" || attendeeData?.major !== "" || attendeeData?.graduation !== "";
		setSeenNext(newVal);
	}, [attendeeData]);

	useEffect(() => {
		setEligibleButton(seenNext);
	}, [attendeeData, seenNext]);

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
		enableReinitialize: true,
		onSubmit: (values) => {
			setAttendeeData(values);
			goNextPage();
		}
	});

	return (
		<Flex direction="column" w="100%" align={"center center"} mt={isSmall ? "61px" : "90px"}>
			<form onSubmit={formik.handleSubmit}>
				<Box textColor='white' fontFamily='Kufam' p={6} pb={0} rounded="md" minHeight={isSmall ? "calc(100vh - 200px)" : "calc(65vh - 20px)"} maxHeight='750px'>
					<VStack spacing='19px' align="flex-start" margin='10vw' marginTop='4vh' marginBottom='0'>
						<CurrentPage pageNo={pageNo} />
						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" m={0} htmlFor="name"> Name <span style={{ color: 'red' }}>*</span></FormLabel>
							<FormInput id="name" name="name" type="text" formik={formik} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" m={0} htmlFor="email">Email <span style={{ color: 'red' }}>*</span></FormLabel>
							<FormInput id="email" name="email" type="text" override={email} formik={formik} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" m={0} htmlFor="dietaryRestrictions">Do you have any dietary restrictions?</FormLabel>
							<MultiCheckBoxInput id="dietaryRestrictions" name="dietaryRestrictions" options={Config.REGISTRATION_DIETARY_RESTRICTIONS} formik={formik} />
						</Box>

						<Box w="100%">
							<FormLabel fontFamily='Kufam' fontWeight="900" m={0} htmlFor="allergies">Do you have any allergies?</FormLabel>
							<MultiSelectInput id="allergies" name="allergies" formik={formik} />
						</Box>

						{!seenNext && 
							<Grid gridTemplateColumns={isSmall ? "1fr" : '1fr 1fr'} gap={6} w="100%" maxWidth={"900px"}>
								<GridItem w='80%'>
									<FormLabel fontFamily='Kufam' fontWeight="900" m={0} htmlFor="over18">Are you over 18 years old?</FormLabel>
								</GridItem>
								<GridItem w='10%'>
									<Checkbox borderColor='white' id="over18" checked={seenNext} onChange={() => { setEligibleButton(!eligibleButton); }} />
								</GridItem>
							</Grid>
						}
					</VStack>
				</Box>

				<Box h="80px">
					<Pagination pageNo={pageNo} goPrevPage={goPrevPage} disableNext={!(seenNext || eligibleButton)} />
				</Box>
			</form>
		</Flex>

	);
}

export default AttendeeInformation;