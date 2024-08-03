import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, InputGroup, InputRightAddon, VStack } from "@chakra-ui/react";
import { useFormik, FormikProps } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const RegistrationValidator = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
});

const RegistrationDefaults = {
	email: "",
	name: "",
};


interface FormInputProps {
	id: string;
	name: string;
	type: string;
	formik: FormikProps<any>;
}

const FormInput: React.FC<FormInputProps> = ({ id, name, type, formik }) => (
	<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
		<Input
			id={id}
			name={name}
			type={type}
			variant="filled"
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values[name]}
		/>
		<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
	</FormControl>
);

const MultiSelectInput: React.FC<FormInputProps> = ({ id, name, type, formik }) => {
	const [children, addChild] = useState<string[]>([]);
	
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (inputValue.trim() !== '') {
			console.log("input!", inputValue)
			addChild([...children, inputValue]);
			setInputValue('');
		}
	  };

	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
			<InputGroup>
				<Input
					id={id}
					name={name}
					type={type}
					variant="filled"
					onChange={(event) => setInputValue(event.target.value)}
					onBlur={formik.handleBlur}
					// value={formik.values[name]}
				/>
				<InputRightAddon as="button" onClick={handleSubmit}> Click! </InputRightAddon>
			</InputGroup>
			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
			<Box>
				{children.map((x) => (
					<Box backgroundColor='gray.200'>
						<Text key="x" textAlign='center'> {x as string} </Text>
					</Box>
				))}
			</Box>
		</FormControl>
	);
}


export function AttendeeInformation() {
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
						<FormLabel htmlFor="name"> Name </FormLabel>
						<FormInput id="name" name="name" type="text" formik={formik} />

						<FormLabel htmlFor="email">Email</FormLabel>
						<FormInput id="email" name="email" type="text" formik={formik} />
						{/* 
			<FormLabel htmlFor="email">{label}</FormLabel>
            <FormInput id="email" name="email" type="text" formik={formik} />
			 */}
						<FormLabel htmlFor="allergies">Allergies</FormLabel>
						<MultiSelectInput id="allergies" name="allergies" type="text" formik={formik} />
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