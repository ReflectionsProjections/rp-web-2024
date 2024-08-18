import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, FormControl, FormErrorMessage, Input, InputGroup, InputRightAddon, SimpleGrid, Text } from "@chakra-ui/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormInputProps {
    id: string;
    name: string;
    formik: FormikProps<any>;
}


function onlyUnique(value: string, index: number, array: string[]) {
	return array.indexOf(value) === index;
}

export const MultiSelectInput: React.FC<FormInputProps> = ({ id, name, formik }) => {
	const [selected, setSelected] = useState<string[]>([formik.values[name] ?? []]);

	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (inputValue.trim() !== '') {
			const newChildren = [...selected, inputValue].filter(onlyUnique);
			setSelected(newChildren);
			formik.setFieldValue(name, newChildren);
			setInputValue('');
		}
	};

	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
			<InputGroup>
				<Input
					color={'white'}
					border={'2px solid white'}
					borderRight='none'
					id={id}
					name={name}
					isDisabled={!!formik.errors[name]}
					onChange={(event) => setInputValue(event.target.value.toUpperCase())}
					onBlur={formik.handleBlur}
					value={inputValue}
				/>
				<InputRightAddon as="button" onClick={handleSubmit} backgroundColor={'#f4f4f42e'} border={'2px solid white'} borderLeft='none'> <CheckCircleIcon /> </InputRightAddon>
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
