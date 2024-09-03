import React, { useState, useEffect } from 'react';
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	Input,
	VStack,
	Text,
	IconButton,
	useMediaQuery,
} from "@chakra-ui/react";
import { FormikProps } from "formik";
import { CloseIcon } from '@chakra-ui/icons';

interface MultiLinkInputProps {
  id: string;
  name: string;
  formik: FormikProps<any>;
}

export const MultiLinkInput: React.FC<MultiLinkInputProps> = ({
	id,
	name,
	formik,
}) => {
	const [links, setLinks] = useState<string[]>(formik.values[name]?.map((link: string) => link.startsWith('https://') ? link : `https://${link}`) || ['https://']);
	const [localErrors, setLocalErrors] = useState<string[]>([]);
	const [isNarrowScreen] = useMediaQuery("(max-width: 30em)");

	const MAX_LINKS = 5;

	useEffect(() => {
		if (formik.errors[name] && Array.isArray(formik.errors[name])) {
			setLocalErrors(formik.errors[name] as string[]);
		} else {
			setLocalErrors([]);
		}
	}, [formik.errors, name]);

	const handleLinkChange = (index: number, value: string) => {
		const newLinks = [...links];
		if (value.startsWith('https://')) {
			newLinks[index] = value;
		} else if (!value.startsWith('https://') && links[index] === 'https://') {
			newLinks[index] = 'https://';
		} else {
			newLinks[index] = 'https://' + value.slice(value.lastIndexOf('//') + 2);
		}
		setLinks(newLinks);
		formik.setFieldValue(name, newLinks);
	};

	const addLink = () => {
		if (localErrors.length === 0 && links.length < MAX_LINKS) {
			setLinks([...links, 'https://']);
			formik.setFieldValue(name, [...links, 'https://']);
		}
	};

	const removeLink = (index: number) => {
		const newLinks = links.filter((_, i) => i !== index);
		setLinks(newLinks);
		formik.setFieldValue(name, newLinks);
	};

	const RemoveButton = ({ index }: { index: number }) => (
		isNarrowScreen ? (
			<IconButton
				aria-label="Remove link"
				icon={<CloseIcon />}
				size="sm"
				position="absolute"
				right="1"
				mt='4px'
				onClick={() => removeLink(index)}
			/>
		) : (
			<Button
				size="sm"
				position="absolute"
				right="1"
				mt='4px'
				onClick={() => removeLink(index)}
			>
        Remove
			</Button>
		)
	);

	return (
		<FormControl isInvalid={!!(formik.touched[name] && formik.errors[name])}>
			<VStack spacing={4} align="stretch">
				{links.map((link, index) => (
					<Box key={index} position="relative">
						<Input
							id={`${id}-${index}`}
							value={link}
							onChange={(e) => handleLinkChange(index, e.target.value)}
							onBlur={formik.handleBlur}
							placeholder="Enter website link"
							pr={isNarrowScreen ? "3rem": "7em"}
							isInvalid={!!(localErrors[index])}
						/>
						<RemoveButton index={index} />
						{localErrors[index] && (
							<Text color="red.500" fontSize="sm" mt={1}>
								{localErrors[index]}
							</Text>
						)}
					</Box>
				))}
				{links.length < MAX_LINKS && (
					<Button 
						onClick={addLink} 
						colorScheme="blue"
						isDisabled={localErrors.length > 0}
					>
            Add another link
					</Button>
				)}
			</VStack>
			{typeof formik.errors[name] === 'string' && (
				<FormErrorMessage>
					{formik.errors[name] as string}
				</FormErrorMessage>
			)}
		</FormControl>
	);
};