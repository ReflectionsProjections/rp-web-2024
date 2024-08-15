import { Button, Flex, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { FormikProps } from "formik";
import FilePicker from "./FilePicker";

interface FormInputProps {
	id: string;
	name: string;
	formik: FormikProps<any>;
}

export const ResumeUpload: React.FC<FormInputProps> = ({ id, name, formik }) => {

	return (
		<Flex>
				<FilePicker onFileSelect={() => {}} />
				<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
		</Flex>
	);
}


