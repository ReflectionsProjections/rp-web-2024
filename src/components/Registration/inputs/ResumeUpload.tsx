import { Flex, FormErrorMessage } from "@chakra-ui/react";
import { FormikProps } from "formik";
import FilePicker from "./FilePicker";
import React  from "react";
import { useToast } from "@chakra-ui/react";
import Config from '../../../config';
import axios from 'axios';

interface FormInputProps {
	id: string;
	name: string;
	formik?: FormikProps<any>;
}

export const ResumeUpload: React.FC<FormInputProps> = ({ name, formik }) => {
	const toast = useToast();

	const handleResumeSubmit = async (file: File) => {
		const jwt = localStorage.getItem("jwt");
		try {
			const response = await axios.get(`${Config.API_BASE_URL}s3/upload/`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `${jwt}`,
				},
			});
			toast({
				title: "Data fetched successfully",
				description: "Your resume has been loaded.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			await uploadToS3(response.data.url, response.data.fields, file);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		if (formik !== undefined) {
			formik.setFieldValue(name, true);
		}
	};
	
	const uploadToS3 = async (url: any, fields:any, file:any) => {
		const form = new FormData();
	
		for (const [key, value] of Object.entries(fields)) {
			if (value instanceof Blob || typeof value === 'string') {
				form.append(key, value);
			} else {
				console.error(`Unexpected value type for key "${key}":`, value);
			}
		}
	
		form.append('file', file);
	
		try {
			await axios.post(url, form, {
				headers: {
					'Content-Type': 'multipart/form-data',
					// ...fields,
				},
			}).then(() => formik?.setFieldValue( name, true ));
		} catch (error) {
			console.error(error);
		}
	};

	const handleFileSelect = async (selectedFile: File | null) => {
		if (selectedFile) {
			await handleResumeSubmit(selectedFile);
		}
	};

	return (
		<Flex>
			<FilePicker onFileSelect={handleFileSelect} hasResume={formik?.values[name]}/>
			<FormErrorMessage>{formik?.errors[name]?.toString()}</FormErrorMessage>
		</Flex>
	);
};


