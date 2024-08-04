import {
    Box,
    Input,
    List,
    ListItem,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
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
    const [selectedOption, setSelectedOption] = useState<string>("");

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(query?.toLowerCase() ?? "")
    ).slice(0, Config.REGISTRATION_MAX_DROPDOWN_OPTIONS);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setQuery(null);
        setIsOpen(false);
        formik.setFieldValue(name, option);
    };

    return (
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} autoFocus={false} closeOnBlur>
            <PopoverTrigger>
                <Box>
                    <Input
                        id={id}
                        value={query ?? selectedOption}
                        onFocus={(e) => {
                            e.target.value = ""
                            setQuery(e.target.value);
                        }}

                        onBlur={() => {
                            setQuery(null);
                            setIsOpen(false);
                            setSelectedOption("");
                        
                        }}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        // placeholder={selectedOption ? selectedOption : 'Select an option'}
                        onClick={() => setIsOpen(!isOpen)}
                        
                    />
                </Box>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                    <List>
                        {filteredOptions.map((option, index) => (
                            <ListItem
                                key={index}
                                onClick={() => handleSelect(option)}
                                cursor="pointer"
                                _hover={{ backgroundColor: 'gray.100' }}
                                padding="8px"
                            >
                                {option}
                            </ListItem>
                        ))}
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default DropdownSelect;
