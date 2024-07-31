import './Registration.css';
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
	handleGetFormData,
	handleResumeSubmit,
	handleSubmit,
	handleFieldSave,
} from "./registration_api.tsx";
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
	Link,
	Switch,
} from "@chakra-ui/react";
import { majorsList } from './majors';
import { graduationYearsList } from './graduationYears';
import FormProgressBar from '../../components/FormProgressBar';

export default function Registration() {
	const [fieldCount, setFieldCount] = useState(1);
	const toast = useToast();
	const [file, setFile] = useState(null);
	const [searchParams] = useSearchParams();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		university: "",
		graduation: "",
		major: "",
		dietaryRestrictions: [""],
		age: 1,
		gender: "",
		race: [""],
		ethnicity: [""],
		allergies: [],
		firstGen: "",
		hearAboutRP: [""],
		portfolio: "",
		jobInterest: [""],
		isInterestedMechMania: false,
		isInterestedPuzzleBang: false,
		hasResume: true,
		hasSubmitted: false,
	});

	//page change
	const handleFieldCountIncrease = (e) => {
		e.preventDefault();
		setFieldCount((prevCount) => prevCount + 1);
	};

	const handleFieldCountDecrease = (e) => {
		e.preventDefault();
		setFieldCount((prevCount) => prevCount - 1);
	};

	//on click functions
	const handleFieldChange = (field, value) => {
		setFormData({
			...formData,
			[field]: value,
		});
	};

	const handleAgeChange = (field, isChecked) => {
		setFormData({
			...formData,
			[field]: isChecked ? 18 : 1,
		});
	};

	const handleChange = (e) => {
		const { name, value, type, checked, age, options } = e.target;
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
		console.log(formData);
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

	const handleToggle = (field) => {
		console.log(formData.isInterestedPuzzleBang);

		setFormData((prevFormData) => ({
			...prevFormData,
			[field]: !prevFormData[field],
		}));
		console.log(formData.isInterestedPuzzleBang);
	};

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile && selectedFile.type === "application/pdf") {
			setFile(selectedFile);
		} else {
			toast({
				title: "Invalid file type",
				description: "Please upload a PDF file.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	const handleFileUpload = () => {
		if (file) {
			console.log("File selected:", file.name);
		}
		handleResumeField();
	};
	//api

	const handleResumeField = async () => {
		const jwt = localStorage.getItem("jwt") || searchParams.get("token");
		await handleResumeSubmit(jwt, searchParams, file, formData, toast);
	};

	const handleSaveField = async (e) => {
		e.preventDefault();
		const searchParams = new URLSearchParams(window.location.search);
		await handleFieldSave(formData, searchParams, setFormData, toast);
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const searchParams = new URLSearchParams(window.location.search);
		await handleSubmit(formData, searchParams, toast);
	};

	const totalSteps = 4;

	useEffect(() => {
		handleGetFormData(searchParams, formData, setFormData);
	}, []);

	return (
		<Stack className="registration-bg">
			{/* <Heading as="h2" size="lg" textAlign="center">
				Register for R|P 2024!
			</Heading> */}
			<form className="registration-form">
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

						<FormControl id="dietary_restrictions">
							<FormLabel>Do you have any dietary restrictions?:</FormLabel>
							<Stack spacing={2}>
								<HStack>
								<Checkbox
									value="vegetarian"
									isChecked={formData.dietaryRestrictions.includes("vegetarian")}
									onChange={(value) => handleCheckboxChange("dietaryRestrictions", value)}
								>
									Vegetarian
								</Checkbox>
								<Checkbox
									value="vegan"
									isChecked={formData.dietaryRestrictions.includes("vegan")}
									onChange={(value) => handleCheckboxChange("dietaryRestrictions", value)}
								>
									Vegan
								</Checkbox>
								</HStack>
								<HStack>
								<Checkbox
									value="gluten-free"
									isChecked={formData.dietaryRestrictions.includes("gluten-free")}
									onChange={(value) => handleCheckboxChange("dietaryRestrictions", value)}
								>
									Gluten-free
								</Checkbox>
								<Checkbox
									value="other"
									isChecked={formData.dietaryRestrictions.includes("other")}
									onChange={(value) => handleCheckboxChange("dietaryRestrictions", value)}
								>
									Other
								</Checkbox>
								</HStack>
							</Stack>
						</FormControl>


						<FormControl id="allergies">
							<FormLabel>Do you have any allergies?:</FormLabel>
							<Stack spacing={2}>
								<HStack spacing={6}>
								<Checkbox
									value="dairy"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Dairy
								</Checkbox>
								<Checkbox
									value="eggs"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Eggs
								</Checkbox>
								<Checkbox
									value="fish"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Fish
								</Checkbox>
								<Checkbox
									value="shellfish"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Shellfish
								</Checkbox>
								{/* </HStack>
								<HStack> */}
								<Checkbox
									value="soy"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Soy
								</Checkbox>
								<Checkbox
									value="sesame"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Sesame
								</Checkbox>
								<Checkbox
									value="wheat"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Wheat
								</Checkbox>
								{/* </HStack>
								<HStack> */}
								<Checkbox
									value="peanuts"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Peanuts
								</Checkbox>
								<Checkbox
									value="tree-nuts"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Tree Nuts
								</Checkbox>
								<Checkbox
									value="other"
									onChange={(value) => handleCheckboxChange("allergies", value)}
								>
									Other
								</Checkbox>
								</HStack>
							</Stack>
						</FormControl>


						<FormControl id="age" isRequired>
							<HStack>
								<FormLabel>
									By checking this box, I agree that I am 18 or older.
								</FormLabel>
								<Checkbox
									value="age"
									onChange={(e) => handleAgeChange("age", e.target.checked)}
									checked={formData.age === 18}
								></Checkbox>
							</HStack>
						</FormControl>
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
							<Select
								placeholder="Select your graduation year"
								name="graduation"
								value={formData.graduation}
								onChange={handleChange}
							>
								{graduationYearsList.map((year) => (
								<option key={year} value={year}>
									{year}
								</option>
								))}
							</Select>
						</FormControl>

						<FormControl id="major">
							<FormLabel>Major</FormLabel>
							<Select
								placeholder="Select your major"
								name="major"
								value={formData.major}
								onChange={handleChange}
							>
								{majorsList.map((major) => (
								<option key={major} value={major}>
									{major}
								</option>
								))}
							</Select>
						</FormControl>

						<FormControl>
							<FormLabel>What type of job are you looking for?</FormLabel>
							<Stack spacing={2}>
								<HStack>
									<Checkbox
										value="internship"
										onChange={(value) =>
											handleCheckboxChange("jobInterest", value)
										}
									>
										Internship
									</Checkbox>
									<Checkbox
										value="co-op"
										onChange={(value) =>
											handleCheckboxChange("jobInterest", value)
										}
									>
										Co-op
									</Checkbox>
									<Checkbox
										value="full-time"
										onChange={(value) =>
											handleCheckboxChange("jobInterest", value)
										}
									>
										Full-time
									</Checkbox>
								</HStack>
							</Stack>
						</FormControl>

						<FormControl>
							<FormLabel>Upload Your Resume</FormLabel>
							<HStack>
								<Input type="file" onChange={handleFileChange} />
								<Button mt={4} onClick={handleFileUpload} variant="registration_pink">
									Upload
								</Button>
							</HStack>
						</FormControl>

						<FormControl id="portfolio">
							<FormLabel>Link to portfolio page</FormLabel>
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
								defaultValue=""
								value={formData.firstGen}
								onChange={(value) => handleFieldChange("firstGen", value)}
							>
								<Stack spacing={5} direction="row">
									<Radio value="Yes">Yes</Radio>
									<Radio value="No">No</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<FormControl id="gender">
							<FormLabel>What is your gender?</FormLabel>
							<RadioGroup
								defaultValue=""
								value={formData.gender}
								onChange={(value) => handleFieldChange("gender", value)}
							>
								<Stack spacing={5} direction="row">
									<Radio value="Male">Male</Radio>
									<Radio value="Female">Female</Radio>
									<Radio value="Other">Other</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<FormControl>
							<FormLabel>Ethnicity:</FormLabel>
							<Stack spacing={2}>
								<HStack spacing={6}>
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
						<FormControl id="interest_puzzle_bang" isRequired>
							<HStack>
								<FormLabel>
									Are you interested in{" "}
									<Link
										color="#f4b253"
										href="https://puzzlebang.com"
										isExternal
									>
										PuzzleBang
									</Link>
									?
								</FormLabel>
								<Switch
									isChecked={formData.isInterestedPuzzleBang}
									onChange={() => handleToggle("isInterestedPuzzleBang")}
								/>
							</HStack>
						</FormControl>

						<FormControl id="interest_mech_puzzle" isRequired>
							<HStack>
								<FormLabel>
									Are you interested in{" "}
									<Link
										color="#f4b253"
										href="https://www.mechmania.org"
										isExternal
									>
										Mechmania
									</Link>
									?
								</FormLabel>
								<Switch
									isChecked={formData.isInterestedMechMania}
									onChange={() => handleToggle("isInterestedMechMania")}
								/>
							</HStack>
						</FormControl>

						<FormControl id="hearAboutRP">
							<FormLabel>How did you hear about R|P?:</FormLabel>
							<Stack spacing={2}>
								<HStack spacing={6}>
								<Checkbox
									value="instagram"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									Instagram
								</Checkbox>
								<Checkbox
									value="linkedin"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									LinkedIn
								</Checkbox>
								<Checkbox
									value="posters"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									Posters
								</Checkbox>
								</HStack>
								<HStack spacing={6}>
								<Checkbox
									value="in-class-announcements"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									In-class Announcements
								</Checkbox>
								<Checkbox
									value="web-search"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									Web Search
								</Checkbox>
								<Checkbox
									value="word-of-mouth"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									Word of Mouth
								</Checkbox>
								<Checkbox
									value="other"
									onChange={(value) => handleCheckboxChange("hearAboutRP", value)}
								>
									Other
								</Checkbox>
								</HStack>
							</Stack>
							</FormControl>

					</Stack>
				)}

				<HStack>
					{fieldCount > 1 && (
						<Button
							type="submit"
							variant="registration_white"
							mt={4}
							w="100%"
							onClick={handleFieldCountDecrease}
						>
							{" "}
							Previous{" "}
						</Button>
					)}

					<FormProgressBar fieldCount={fieldCount} totalSteps={totalSteps} />
					
					{fieldCount < 4 && (
						<HStack>
							<Button
								type="submit"
								variant="registration_white"
								mt={4}
								w="100%"
								onClick={handleSaveField}
							>
								{" "}
								Save{" "}
							</Button>
							<Button
								type="submit"
								variant="registration_white"
								mt={4}
								w="100%"
								onClick={handleFieldCountIncrease}
							>
								{" "}
								Next{" "}
							</Button>

							
						</HStack>
					)}

					{fieldCount == 4 && (
						<Button
							type="submit"
							variant="registration_pink"
							mt={4}
							w="100%"
							onClick={handleSubmitForm}
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
