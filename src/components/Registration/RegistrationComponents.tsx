import { CheckCircleIcon } from "@chakra-ui/icons";
import { FormControl, Input, FormErrorMessage, Box, Text, InputGroup, InputRightAddon, SimpleGrid } from "@chakra-ui/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormInputProps {
    id: string;
    name: string;
    type: string;
    formik: FormikProps<any>;
}


function onlyUnique(value: string, index: number, array: string[]) {
	return array.indexOf(value) === index;
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

export const MultiSelectInput: React.FC<FormInputProps> = ({ id, name, type, formik }) => {
	const [selected, setSelected] = useState<string[]>([]);

	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (inputValue.trim() !== '') {
            const newChildren = [...selected, inputValue].filter(onlyUnique)
			setSelected(newChildren);
            formik.setFieldValue(name, newChildren);
            setInputValue('');
		}
	};

	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>

			<InputGroup>
				<Input
					color={'black'}
					id={id}
					name={name}
					type={type}
					onChange={(event) => setInputValue(event.target.value)}
					onBlur={formik.handleBlur}
					value={inputValue}
				/>
				<InputRightAddon as="button" onClick={handleSubmit} bgColor={'gray.100'}> <CheckCircleIcon /> </InputRightAddon>
			</InputGroup>
			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
			<SimpleGrid columns={2} spacing={2} mt={2}>
				{selected.map((x) => (
					<Box
						backgroundColor="gray.200"
						key={x}
						textAlign="center"
						rounded="md"
						position="relative"
						textColor={'black'}
						onClick={() => {
							const updatedChildren = selected.filter((child) => child !== x);
							setSelected(updatedChildren);
                            formik.setFieldValue(name, updatedChildren);
						}}
						_hover={{ backgroundColor: "red.200", textDecoration: "line-through" }}
					>
						<Text color='black' fontSize='15px'>{x}</Text>
					</Box>
				))}
			</SimpleGrid>
		</FormControl>
	);
};
