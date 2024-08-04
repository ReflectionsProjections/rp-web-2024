import { Flex, FormControl, FormErrorMessage, Radio, RadioGroup, Spacer, Stack, Switch } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface FormInputProps {
    id: string;
    name: string;
    formik: FormikProps<any>;
}

export const TrueFalseCheckBoxInput: React.FC<FormInputProps> = ({ id, name, formik }) => {
	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>

			<RadioGroup id={id} onChange={(e) => {formik.values[name] = (e == "true"); console.log(e);}}>
				<Stack direction='row'>
					<Flex direction="row" width="100%"> 
						<Radio value='false'> NO </Radio>
						<Spacer />
						<Radio value='true'> YES </Radio>
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

			<Switch id={id} onChange={formik.handleChange}/>

			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
		</FormControl>

	);
};

