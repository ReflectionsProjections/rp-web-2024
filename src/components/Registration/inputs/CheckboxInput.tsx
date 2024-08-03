import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Checkbox, FormControl, FormErrorMessage, Input, InputGroup, InputRightAddon, SimpleGrid, Text } from "@chakra-ui/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormInputProps {
    id: string;
    name: string;
    type: string;
    formik: FormikProps<any>;
}

export const CheckBoxInput: React.FC<FormInputProps> = ({ id, name, type, formik }) => {

	return (
		<SimpleGrid spacing={2} mt={2} minChildWidth="120px" w="100%"> 
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
			<Checkbox id={id}>Checkbox</Checkbox>
		</SimpleGrid>
	);
};
