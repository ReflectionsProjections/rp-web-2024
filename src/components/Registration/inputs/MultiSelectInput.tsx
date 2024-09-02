import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputRightAddon,
	SimpleGrid,
	Text,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverBody,
	List,
	ListItem,
} from "@chakra-ui/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormInputProps {
  id: string;
  name: string;
  formik: FormikProps<any>;
  baseValue?: string;
  options: string[];
}

function onlyUnique(value: string, index: number, array: string[]) {
	return array.indexOf(value) === index;
}

export const MultiSelectInput: React.FC<FormInputProps> = ({
	id,
	name,
	formik,
	baseValue = '',
	options,
}) => {
	const [selected, setSelected] = useState<string[]>(formik.values[name] ?? []);
	const [inputValue, setInputValue] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (inputValue.trim() !== '') {
			const newChildren = [...selected, inputValue].filter(onlyUnique);
			setSelected(newChildren);
			formik.setFieldValue(name, newChildren);
			setInputValue('');
			setIsOpen(false);
		}
	};

	const handleSelect = (option: string) => {
		if (!selected.includes(option)) {
			const newChildren = [...selected, option];
			setSelected(newChildren);
			formik.setFieldValue(name, newChildren);
			setInputValue('');
			setIsOpen(false);
		}
	};

	const filteredOptions = options.filter(
		(option) => option.toUpperCase().includes(inputValue.toUpperCase()) && !selected.includes(option)
	);

	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
			<Popover isOpen={isOpen} onClose={() => setIsOpen(false)} autoFocus={false} closeOnBlur={true}>
				<PopoverTrigger>
					<InputGroup>
						<Input
							color={'white'}
							border={'2px solid white'}
							borderRight='none'
							id={id}
							name={name}
							isDisabled={!!formik.errors[name]}
							onChange={(event) => {
								setInputValue(event.target.value.toUpperCase());
								setIsOpen(true);
							}}
							onClick={() => setIsOpen(!isOpen)}
							onBlur={() => {
								setTimeout(() => setIsOpen(false), 200);
							}}
							value={inputValue.toUpperCase()}
							placeholder={baseValue.toUpperCase()}
						/>
						<InputRightAddon
							as="button"
							onClick={handleSubmit}
							backgroundColor={'#f4f4f42e'}
							border={'2px solid white'}
							borderLeft='none'>
							<AddIcon />
						</InputRightAddon>
					</InputGroup>
				</PopoverTrigger>
				<PopoverContent bgColor={'#313848'} minWidth='200px' width='70vw' maxWidth='70vw'>
					<PopoverArrow />
					<PopoverBody>
						<List onMouseDown={(event) => { event.preventDefault(); }}>
							{filteredOptions.map((option) => (
								<ListItem
									key={option}
									onClick={() => handleSelect(option)}
									cursor="pointer"
									padding="8px"
									_hover={{ backgroundColor: "gray.300" }}
								>
									{option.toUpperCase()}
								</ListItem>
							))}
						</List>
					</PopoverBody>
				</PopoverContent>
			</Popover>
			<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
			<SimpleGrid columns={2} spacing={2} mt={2}>
				{selected.map((x) => (
					<Box
						backgroundColor="gray.200"
						key={x}
						display='flex' 
						justifyContent='center'
						textAlign="center"
						alignItems={"center"}
						rounded="md"
						position="relative"
						textColor={'black'}
						onClick={() => {
							const updatedChildren = selected.filter((child) => child !== x);
							setSelected(updatedChildren);
							formik.setFieldValue(name, updatedChildren);
						}}
						_hover={{ backgroundColor: "red.200", textDecoration: "line-through", cursor: "pointer" }}
					>
						<Text color='black' fontSize='15px' p={2}>{x.toUpperCase()}</Text>
					</Box>
				))}
			</SimpleGrid>
		</FormControl>
	);
};