import { Checkbox, SimpleGrid } from "@chakra-ui/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormInputProps {
    id: string;
    name: string;
    formik: FormikProps<any>;
    options: string[];
}

function onlyUnique(value: string, index: number, array: string[]) {
	return array.indexOf(value) === index;
}

function isNotValueToRemove(valueToRemove: string) {
	return function(x: string) {
		return x !== valueToRemove;
	};
}

export const MultiCheckBoxInput: React.FC<FormInputProps> = ({ id, name, formik, options }) => {
	const [checked, setChecked] = useState<string[]>(formik.values[name] ?? []);

	const handleChange = (field: string) => {
		let newChecked;

		if (checked.includes(field)) {
			newChecked = checked.filter(isNotValueToRemove(field));
		} else {
			newChecked = [...checked, field].filter(onlyUnique);
		}
        
		setChecked(newChecked);
		formik.values[name] = newChecked;
	};

	return (
		<SimpleGrid spacing={4} mt={2} minChildWidth="140px" w="100%" id={id}> 
			{options.map((x) => <Checkbox key={x} isChecked={checked.includes(x.toUpperCase())} borderColor='white' wordBreak={'break-word'} onChange={() => handleChange(x.toUpperCase())}> {x.toUpperCase()} </Checkbox>)}
		</SimpleGrid>
	);
};
