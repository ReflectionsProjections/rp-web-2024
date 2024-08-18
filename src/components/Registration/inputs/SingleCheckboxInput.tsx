import { Flex, FormControl, FormErrorMessage, Radio, RadioGroup, Stack, Switch } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface FormInputProps {
    id: string;
    name: string;
    formik: FormikProps<any>;
}

export const TrueFalseCheckBoxInput: React.FC<FormInputProps> = ({ id, name, formik }) => {
	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>

			<RadioGroup
				id={id} 
				onChange={(e) => {formik.values[name] = (e == "true"); console.log(e);}}>
				<Stack direction='row'>
					<Flex direction="row" width="100%"> 
						<Radio borderColor='white' value='true'> YES </Radio>
						<Radio borderColor='white' marginLeft='40px' value='false'> NO </Radio>
					</Flex>
				</Stack>
			</RadioGroup>

			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
		</FormControl>

	);
};


export const TrueFalseSwitchInput: React.FC<FormInputProps> = ({ id, name, formik }) => {
	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>

			<Switch sx={{ 'span.chakra-switch__track:not([data-checked])': { backgroundColor: '#CC4485' } }} id={id} onChange={formik.handleChange}/>

			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
		</FormControl>

	);
};

