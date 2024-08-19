import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface FormInputProps {
    id: string;
    name: string;
    type: string;
    formik: FormikProps<any>;
	override?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ id, name, type, formik, override}) => (
	<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
		<Input
			color={'white'}
			backgroundColor={'#2C587E'}
			border={'2px solid white'}
			id={id}
			name={name}
			type={type}
			variant="filled"
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={override ?? formik.values[name]}
			disabled={override !== undefined}
		/>
		<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
	</FormControl>
);