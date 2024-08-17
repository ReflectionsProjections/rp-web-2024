import { Button, Flex, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { FormikProps } from "formik";
import FilePicker from "./FilePicker";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import Config from '../../../config';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

interface FormInputProps {
	id: string;
	name: string;
	formik: FormikProps<any>;
}

export const ResumeUpload: React.FC<FormInputProps> = ({ id, name, formik }) => {
	const [file, setFile] = useState<File | null>(null);
	const toast = useToast();
	const [searchParams] = useSearchParams();

	const handleResumeSubmit = async () => {
		const jwt = localStorage.getItem("jwt") || searchParams.get("token");
		try {
			const response = await axios.get(`${Config.BASE_URL}s3/upload/`, {
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
			console.log(response.data);
			console.log("url" + response.data.url);
			console.log("fields" + response.data.fields);
			uploadToS3(response.data.url, response.data.fields, file);
		} catch (error) {
			console.error("Error fetching data:", error);
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
			const response = await axios.post(url, form, {
				headers: {
					...fields,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleFileSelect = (selectedFile: File | null) => {
		setFile(selectedFile);
		handleResumeField();
	  };

	const handleResumeField = async () => {
		await handleResumeSubmit();
	};

	return (
		<Flex>
			<FilePicker onFileSelect={handleFileSelect} />
			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
		</Flex>
	);
};


