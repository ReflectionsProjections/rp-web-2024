import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

import axios from "axios";
import Config from "../config.ts"; 

import {
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	Select,
	Checkbox,
	HStack,
	RadioGroup,
	Radio,
	useToast,
	Link
} from "@chakra-ui/react";

export default function Registration() {
	const [fieldCount, setFieldCount] = useState(1);
	const toast = useToast(); 

	
const handleFieldCountIncrease = () => {
		setFieldCount((prevCount) => prevCount + 1);
	};

	const handleFieldCountDecrease = () => {
		setFieldCount((prevCount) => prevCount - 1);
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		university: "",
		graduation: "",
		major: "",
		dietaryRestrictions: "",
		age: 1,
		gender: "",
		race: [],
		ethnicity: [],
		firstGen: "",
		hearAboutRP: [],
		portfolio: "",
		jobInterest: [],
		isInterestedPuzzleBang: false,
		isInterestedMechMania: false,
		hasResume:false,
		hasSubmitted: false,
	});
    const [searchParams] = useSearchParams();

	const handleFieldSave = async () => {
		let jwt = localStorage.getItem("jwt");
	    jwt = searchParams.get("token");

		console.log(jwt)
			const promise = await axios.post(Config.BASE_URL + 'registration/save', {
				name: "John Doe",
				email: "john.doe@example.com",
				university: "Example University",
				graduation: "2024",
				major: "Computer Science",
				dietaryRestrictions: ["None"],
				age: 21,
				gender: "Male",
				race: ["Race1", "Race2"],
				ethnicity: ["Ethnicity1"],
				firstGen: "Yes",
				hearAboutRP: ["Friend", "Internet"],
				portfolio: "http://portfolio.example.com",
				jobInterest: ["Software Engineer"],
				isInterestedMechMania: "Yes",
				isInterestedPuzzleBang: true,
				hasResume: true,
				hasSubmitted: true
			},
			{headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwt}`,
			  }}
			);
	
			toast.promise(promise, {
				success: { title: 'Success!', description: 'Your data has been saved.' },
				error: { title: 'Oops!', description: 'Something went wrong - please try again.' },
				loading: { title: 'Saving', description: 'Please wait...' },
			});
	};
	
	
	const handleFieldChange = (field, value) => {
		setFormData({
			...formData,
			[field]: value,
		});
	};

	const handleChange = (e) => {
		const { name, value, type, checked,age, options } = e.target;
		const val = type === "checkbox" ? checked : value;
		setFormData((prevData) => ({
			...prevData,
			[name]:
				type === "select-multiple"
					? Array.from(options)
							.filter((option: any) => option.selected)
							.map((option: any) => option.value)
					: val,
		}));
	};

	const handleCheckboxChange = (field, event) => {
		const { value, checked } = event.target;
		if (checked) {
			handleFieldChange(field, [...formData[field], value]);
		} else {
			handleFieldChange(
				field,
				formData[field].filter((item) => item !== value)
			);
		}
	};

	const handleSelectChange = (field, event) => {
		const { value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[field]: value,
		}));
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	//add api call here 
	// 	//make a post request function here for ./submit 
	
	// 	try {
	// 	await axios.post(Config.BASE_URL + "subscription", formData);
	// 	toast({
	// 		title: "Success!",
	// 		description: "Your data has been submitted.",
	// 		status: "success",
	// 		duration: 5000,
	// 		isClosable: true,
	// 	});
	// 	} catch (error) {
	// 	toast({
	// 		title: "Oops!",
	// 		description: "Something went wrong - please try again.",
	// 		status: "error",
	// 		duration: 5000,
	// 		isClosable: true,
	// 	});
	// 	}
	// 	console.log(formData);
	// };
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  await axios.post(Config.BASE_URL + "/registration/submit", formData);
		  toast({
			title: "Success!",
			description: "Your data has been submitted.",
			status: "success",
			duration: 5000,
			isClosable: true,
		  });
		} catch (error) {
		  toast({
			title: "Oops!",
			description: "Something went wrong - please try again.",
			status: "error",
			duration: 5000,
			isClosable: true,
		  });
		}
		console.log(formData);
	  };
	return (
		<Stack
			spacing={5}
			w={{ base: "80%", md: "50%" }}
			mx="auto"
			mt={10}
			p={4}
			borderRadius="lg"
			boxShadow="lg"
		>
			<Heading as="h2" size="lg" textAlign="center">
				Register for R|P 2024!
			</Heading>
			<form onSubmit={handleSubmit}>
				{fieldCount == 1 && (
					<Stack>
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								type="text"
								placeholder="Enter your name"
								name="name"
								value={formData.name}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="email" isRequired>
							<FormLabel>Email Address</FormLabel>
							<Input
								type="email"
								placeholder="Enter your email address"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="dietary-restriction" isRequired>
							<FormLabel>Dietary Restrictions</FormLabel>
							<Select
								placeholder="Select option"
								value={formData.dietary_restrictions}
								onChange={(value) =>
									handleSelectChange("dietary_restrictions", value)
								}
							>
								<option value="vegetarian">Vegetarian</option>
								<option value="gluten">Gluten-Free</option>
								<option value="none">None</option>
							</Select>
						</FormControl>
						<FormControl id="age">
							<HStack>
							<FormLabel>By checking this box, I agree that I am 18 or older.</FormLabel>
							<Checkbox
										value="age"
										onChange={(value) =>
											handleCheckboxChange("job_interest", value)
										}
									>
							</Checkbox>
							</HStack>
						</FormControl>
							{/* <RadioGroup
								defaultValue="no"
								value={formData.age}
								onChange={(value) => handleChange(value)}
							>
								<Stack spacing={5} direction="row">
									<Radio value={true}>Yes</Radio>
									<Radio value={false}>No</Radio>
								</Stack>
							</RadioGroup>
						</FormControl> */}
					</Stack>
				)}

				{fieldCount == 2 && (
					<Stack>
					<FormControl id="university" isRequired>
							<FormLabel>University</FormLabel>
							<Input
								type="text"
								placeholder="Enter your university"
								name="university"
								value={formData.university}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="graduation">
							<FormLabel>Graduation Year</FormLabel>
							<Input
								type="text"
								placeholder="Enter your graduation year"
								name="graduation"
								value={formData.graduation}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl id="major">
							<FormLabel>Major</FormLabel>
							<Input
								type="text"
								placeholder="Enter your major"
								name="major"
								value={formData.major}
								onChange={handleChange}
							/>
						</FormControl>
					

						<FormControl>
							<FormLabel>What type of job looking for:</FormLabel>
							<Stack spacing={2}>
								<HStack>
									<Checkbox
										value="internship"
										onChange={(value) =>
											handleCheckboxChange("job_interest", value)
										}
									>
										Internship
									</Checkbox>
									<Checkbox
										value="co-op"
										onChange={(value) =>
											handleCheckboxChange("job_interest", value)
										}
									>
										Co-op
									</Checkbox>
									<Checkbox
										value="full-time"
										onChange={(value) =>
											handleCheckboxChange("job_interest", value)
										}
									>
										Full-time
									</Checkbox>
								</HStack>
							</Stack>
						</FormControl>
{/* resume here */}						
						
						<FormControl id="portfolio">
							<FormLabel>Link to porfolio page</FormLabel>
							<Input
								type="text"
								placeholder="Enter your portfolio or github"
								name="portfolio"
								value={formData.portfolio}
								onChange={handleChange}
							/>
						</FormControl>
					</Stack>
				)}

				{fieldCount == 3 && (
					<Stack>
						<FormControl id="first_gen">
							<FormLabel>Are you a first-gen student?</FormLabel>
							<RadioGroup
								defaultValue="no"
								value={formData.firstGen}
								onChange={(value) => handleFieldChange("first_gen", value)}
							>
								<Stack spacing={5} direction="row">
									<Radio value="yes">Yes</Radio>
									<Radio value="no">No</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<FormControl>
							<FormLabel>Ethnicity:</FormLabel>
							<Stack spacing={2}>
								<HStack>
									<Checkbox
										value="white"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										{" "}
										White
									</Checkbox>
									<Checkbox
										value="black"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										Black
									</Checkbox>
									<Checkbox
										value="hispanic"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										{" "}
										Hispanic
									</Checkbox>
									<Checkbox
										value="asian"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										Asian
									</Checkbox>
									<Checkbox
										value="pacific-islander"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										Pacific Islander
									</Checkbox>
									<Checkbox
										value="middle-eastern"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										Middle Eastern
									</Checkbox>
									<Checkbox
										value="other"
										onChange={(value) =>
											handleCheckboxChange("ethnicity", value)
										}
									>
										Other
									</Checkbox>
								</HStack>
							</Stack>
						</FormControl>
					</Stack>
				)}

				{fieldCount == 4 && (
					<Stack>	
						<FormControl id="interest_mech_puzzle">
							<FormLabel>Are you interested in <Link color='teal.500' href='https://puzzlebang.com' isExternal>PuzzleBang</Link>?
							</FormLabel>
							<RadioGroup
								defaultValue="no"
								value={formData.isInterestedPuzzleBang}
								onChange={(value) =>
									handleFieldChange("interest_puzzlebang", value)
								}
							>
								<Stack spacing={5} direction="row">
									<Radio value="yes">Yes</Radio>
									<Radio value="no">No</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<FormControl id="interest_mech_puzzle">
							<FormLabel>Are you interested in <Link color='teal.500' href='https://www.mechmania.org' isExternal>Mechmania</Link>?
							</FormLabel>
							<RadioGroup
								defaultValue="no"
								value={formData.isInterestedMechMania}
								onChange={(value) =>
									handleFieldChange("interest_mechmania", value)
								}
							>
								<Stack spacing={5} direction="row">
									<Radio value="yes">Yes</Radio>
									<Radio value="no">No</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<FormControl id="hear_about_rp">
							<FormLabel>How did you hear about R|P?</FormLabel>
							<Select
								placeholder="Select option"
								value={formData.hearAboutRP}
								onChange={(value) => handleSelectChange("hear_about_rp", value)}
							>
								<option value="friends">Friends</option>
								<option value="poster">Poster</option>
								<option value="web">Google</option>
							</Select>
						</FormControl>
					</Stack>
				)}

				<HStack>
					{fieldCount > 1 && (
						<Button
							type="submit"
							colorScheme="purple"
							mt={4}
							w="100%"
							onClick={handleFieldCountDecrease}
						>
							{" "}
							Previous{" "}
						</Button>
					)}
					{fieldCount < 4 && (

					<HStack> 
						<Button
							type="submit"
							colorScheme="purple"
							mt={4}
							w="100%"
							onClick={handleFieldCountIncrease}
						>
							{" "}
							Next{" "}
						</Button>

						<Button
							type="submit"
							colorScheme="purple"
							mt={4}
							w="100%"
							onClick={handleFieldSave}
							>
							{" "}
							Save{" "}
						</Button>
					</HStack>
					)}
					
					{fieldCount == 4 && (
						<Button
							type="submit"
							colorScheme="purple"
							mt={4}
							w="100%"
							onClick={handleSubmit}
						>
							{" "}
							Submit{" "}
						</Button>
					)}


				</HStack>

			</form>
		</Stack>
	);
}
