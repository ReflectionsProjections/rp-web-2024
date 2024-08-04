function getEnv(key: string, safeMode: boolean = false, defaultValue: string = "") {
	const val = import.meta.env[key];

	if (!safeMode && val === undefined) {
		throw new Error(`env value ${key} not found, exiting...`);
	}

	return val ?? defaultValue;
}

const Config = {
	IS_PROD: getEnv("VITE_IS_PROD", true, "0") == "1",
	BASE_URL: "https://api.reflectionsprojections.org/",
	
	NUM_REGISTRATION_PAGES: 2,
	REGISTRATION_MAX_DROPDOWN_OPTIONS: 5,
	REGISTRATION_GRADUATION_YEARS: ["2023", "2024", "2025", "2026", "2027", "2028", "2029"],
	REGISTRATION_OPEN_TO: ["summer internship", "fall internship", "spring internship", "full time"]
};

export default Config;
