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
	portfolio: "",
	jobInterest: [""],
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
	REGISTRATION_ETHNICITIES: ["white", "black", "hispanic", "asian", "pacific islander", "middle eastern", "other"],
	REGISTRATION_REFERRAL_SOURCE: ["white", "black", "hispanic", "asian", "pacific islander", "middle eastern", "other"],
	REGISTRATION_DIETARY_RESTRICTIONS: ["vegan", "vegetarian", "gluten-free", "dairy-free"],

};

export default Config;
