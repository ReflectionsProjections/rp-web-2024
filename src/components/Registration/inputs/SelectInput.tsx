import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface FormInputProps {
    id: string;
    name: string;
    formik: FormikProps<any>;
    options: string[];
}

export const SelectInput: React.FC<FormInputProps> = ({ id, name, formik, options }) => {
	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
			<Select mt={2} w="100%" border={'2px solid white'} id={id} onChange={(e) => {
				formik.setFieldValue(name, e.target.value);}} value={formik.values[name]} onBlur={formik.handleBlur}>
				<option> Select Graduation Year! </option>
				{options.map((x) => <option key={x} value={x}> {x} </option>)}
			</Select>
			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
		</FormControl>
	);
};
