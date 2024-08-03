import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface FormInputProps {
    id: string;
    name: string;
    type: string;
    formik: FormikProps<any>;
}

export const FormInput: React.FC<FormInputProps> = ({ id, name, type, formik }) => (
	<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
		<Input
			color={'black'}
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