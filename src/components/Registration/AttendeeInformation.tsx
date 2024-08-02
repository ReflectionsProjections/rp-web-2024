import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, VStack } from "@chakra-ui/react";
import '@fontsource/kufam';
import '@fontsource/nunito';
import '@fontsource/roboto-slab/300.css';
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationValidator = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required')

});

const RegistrationDefaults = {
	email: "",
	name: "",
};

export function AttendeeInformation() {
	// const [isMedium] = useMediaQuery("(max-width: 850px)");
	// const [isSmall] = useMediaQuery("(max-width: 600px)");
	// const [isXSmall] = useMediaQuery("(max-width: 400px)");

	const formik = useFormik({
		initialValues: RegistrationDefaults,
		validationSchema: RegistrationValidator,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md">
				<form onSubmit={formik.handleSubmit}>
					<VStack spacing={4} align="flex-start">
						<FormControl isInvalid={!!(formik.touched.email && formik.errors.email)}>
							<FormLabel htmlFor="email">Email Address</FormLabel>
							<Input
								id="email"
								name="email"
								type="text"
								variant="filled"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="name">Name</FormLabel>
							<Input
								id="name"
								name="name"
								type="text"
								variant="filled"
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
						</FormControl>
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

