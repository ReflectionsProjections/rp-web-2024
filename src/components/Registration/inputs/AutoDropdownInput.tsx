import {
	FormControl,
	FormErrorMessage,
	Input,
	List,
	ListItem,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger
} from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { useState } from 'react';
import Config from '../../../config';

interface DropdownSelectProps {
    id: string;
    name: string;
    formik: FormikProps<any>;
    options: string[];
}

function DropdownSelect({ id, name, formik, options }: DropdownSelectProps) {
	const [query, setQuery] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>(formik.values[name] ?? "");

	const [filteredOptions, setFilteredOptions] = useState<string[]>(options.slice(0, Config.REGISTRATION_MAX_DROPDOWN_OPTIONS));

	const resetFilter = () => {
		const newOptions = options.filter(option =>
			option.toLowerCase().includes(query?.toLowerCase() ?? "")
		).slice(0, Config.REGISTRATION_MAX_DROPDOWN_OPTIONS);
		setFilteredOptions(newOptions);
	};

	const handleSelect = (option: string) => {
		setSelectedOption(option);
		setQuery(null);
		setIsOpen(false);
		formik.setFieldValue(name, option);
	};

	return (
		<>
			<Popover isOpen={isOpen} onClose={() => setIsOpen(false)} autoFocus={false} closeOnBlur={true}>
				<PopoverTrigger>
					<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
						<Input
							id={id}
							value={query ?? selectedOption}
							border={'2px solid white'}
							onFocus={(e) => {
								e.target.value = "";
								setQuery(e.target.value);
								resetFilter();
							}}
							onChange={(e) => {
								setQuery(e.target.value);
								resetFilter();
								setIsOpen(true);
							}}
							onClick={() => {
								setIsOpen(!isOpen);
								setSelectedOption("");
							}}
							onBlur={() => {
								setIsOpen(false);
							}}
							autoComplete="off"
						/>
						<FormErrorMessage>{formik.errors[name]?.toString()}</FormErrorMessage>
					</FormControl>
				</PopoverTrigger>
				<PopoverContent bgColor={'#313848'} minWidth='200px' width='90vw' maxWidth='90vw'>
					<PopoverArrow />
					<PopoverBody>
						<List onMouseDown={(event)=>{event.preventDefault();}}>
							{filteredOptions.map((option) => (
								<ListItem
									key={option}
									onClick={() => {
										handleSelect(option);
									}
									}
									cursor="pointer"
									_hover={{ backgroundColor: 'gray.100', color: 'black' }}
									padding="8px"
								>
									{option}
								</ListItem>
							))}
						</List>
					</PopoverBody>
				</PopoverContent>
			</Popover >
		</>
	);
}

export default DropdownSelect;
