function getEnv(key: string, safeMode: boolean = false, defaultValue: string = "") {
	const val = import.meta.env[key];

	if (!safeMode && val === undefined) {
		throw new Error(`env value ${key} not found, exiting...`);
	}

	return val ?? defaultValue;
}

export const defaultRegistrationValues = {
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
	portfolios: [],
	jobInterest: [],
	isInterestedMechMania: false,
	isInterestedPuzzleBang: false,
	hasResume: true,
	hasSubmitted: false,
};

const Config = {
	IS_PROD: getEnv("VITE_IS_PROD", true, "0") == "1",
	BASE_URL: "https://api.reflectionsprojections.org/",

	NUM_REGISTRATION_PAGES: 5,
	REGISTRATION_MAX_DROPDOWN_OPTIONS: 5,
	REGISTRATION_GRADUATION_YEARS: ["Dec 2024", "May 2025", "Dec 2025", "May 2026", "Dec 2026", "May 2027", "Dec 2027", "May 2028", "Dec 2028", "May 2029", "Dec 2029"],
	REGISTRATION_OPEN_TO: ["summer internship", "fall internship", "spring internship", "full time"],
	REGISTRATION_GENDERS: ["male", "female", "transgender", "nonbinary/non-conforming", "other/prefer not to respond"],
	REGISTRATION_ETHNICITIES: ["hispanic/latinx", "american indian/alaskan native", "asian", "black/african american", "pacific islander", "middle eastern", "white"],
	REGISTRATION_REFERRAL_SOURCE: ["word of mouth", "instagram", "linkedin", "in-class marketing", "email", "flyers", "on campus events", "other"],
	REGISTRATION_DIETARY_RESTRICTIONS: ["vegan", "vegetarian", "gluten-free", "dairy-free"],

};

export default Config;
