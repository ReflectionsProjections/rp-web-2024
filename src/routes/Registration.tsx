import { Box, VStack, useMediaQuery, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/Pages/AttendeeInformation';
import Career from '../components/Registration/Pages/Career';
import Diversity from "../components/Registration/Pages/Diversity";
import Education from '../components/Registration/Pages/Education';
import Engagement from '../components/Registration/Pages/Engagement';
import Config, { defaultRegistrationValues } from '../config';
import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';

export interface AttendeeData {
	name: string;
	email: string;
	university: string;
	graduation: string;
	major: string;
	degree: string;
	dietaryRestrictions: string[];
	allergies: string[];
	portfolios: string[];
	isInterestedMechMania: boolean;
	isInterestedPuzzleBang: boolean;
	hasResume: boolean;
	hasSubmitted: boolean;
}

export interface PageProps {
	pageNo: number;
	goNextPage: () => void;
	goPrevPage: () => void;
	setAttendeeData: React.Dispatch<React.SetStateAction<object>>;
	attendeeData: AttendeeData;
	jwt: string;
}

export interface FormikValues {
	[key: string]: unknown;
}

export default function Registration() {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [isShort] = useMediaQuery("(max-height: 735px)");
	const [attendeeData, setAttendeeData] = useState(defaultRegistrationValues);
	const [needsInit, setNeedsInit] = useState(true);

	const [pageNo, setPageNo] = useState(0);
	const [jwt, setJwt] = useState("");

	function fetchJwt() {
		const jwt = localStorage.getItem("jwt");

		let isAlmostStaleJwt = false;
		// Check if the JWT is stale
		if (jwt) {
			const jwt_decoded = jwtDecode(jwt);
			isAlmostStaleJwt = Date.now() > (jwt_decoded["exp"]! * 1000) - 30 * 60 * 1000;
		}

		if (!jwt || isAlmostStaleJwt) {
			localStorage.removeItem("jwt");
			window.location.href = Config.BASE_URL + "auth/login/web";
			return;
		}

		setJwt(jwt!);
	}

	useEffect(() => {
		fetchJwt();
	}, [jwt]);

	useEffect(() => {
		if (needsInit) {
			if (!jwt) {
				fetchJwt();
			}

			setNeedsInit(false);
		}
	}, [needsInit, jwt]);

	useEffect(() => {
		handleGetFormData();
	}, [needsInit]); 

	useEffect(() => {
		if (attendeeData.hasSubmitted) {
			// window.alert("Oops! You've already submitted.");
			window.location.href= "/myrp";
		}
	}, [attendeeData]);

	const toast = useToast();

	function goNextPage() {
		setPageNo(pageNo + 1);
	}

	function goPrevPage() {
		setPageNo(pageNo - 1);
	}


	async function handleGetFormData() {
		try {
			const response = await axios.get(Config.BASE_URL + "registration/", {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `${jwt}`,
				},
			});
			
			const { registration } = response.data;
			setAttendeeData({
				...defaultRegistrationValues,
				...registration,
			});
		} catch (error) {
			console.error("Error fetching data:", error);
			fetchJwt();
		}
	}

	function handleSave(values: object) {
		if (pageNo == Config.NUM_REGISTRATION_PAGES - 1) {
			setAttendeeData((prevData) => {
				const newData = { ...prevData, ...values };
				handleSubmit(newData);
				return newData;
			});
		} else {
			setAttendeeData((prevData) => {
				const newData = { ...prevData, ...values };
				saveData(newData);
				return newData;
			});
		}
	}

	async function saveData(data: object) {
		const promise = axios.post(
			Config.BASE_URL + "registration/save",
			{
				...data,
				hasSubmitted: false,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `${jwt}`,
				},
			}
		);

		toast.promise(promise, {
			success: {
				title: "Success!",
				description: "Your data has been saved.",
			},
			error: {
				title: "Oops!",
				description: "Something went wrong - please try again.",
			},
			loading: { title: "Saving", description: "Please wait..." },
		});
	}

	// Called every time a form is submitted
	async function handleSubmit(data: object) {
		const promise = axios.post(
			Config.BASE_URL + "registration/submit",
			{
				...data,
				hasSubmitted: true,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `${jwt}`,
				},
			}
		).then(() => {
			window.alert("Your submission has been processed. Please check your email (and junk/spam) for confirmation.");
			localStorage.removeItem("jwt");
			setJwt("");
			window.location.href="/";
		});

		toast.promise(promise, {
			success: {
				title: "Success!",
				description: "Your data has been submitted.",
			},
			error: {
				title: "Oops!",
				description: "Something went wrong - please try again.",
			},
			loading: { title: "Submitting", description: "Please wait..." },
		});
	}

	const props: PageProps = {
		pageNo: pageNo,
		goNextPage: goNextPage,
		goPrevPage: goPrevPage,
		setAttendeeData: handleSave,
		attendeeData: attendeeData,
		jwt: jwt,
	};

	function getPage() {
		switch (pageNo) {
		case 0: return <AttendeeInformation {...props} />;
		case 1: return <Education {...props} />;
		case 2: return <Career {...props} />;
		case 3: return <Diversity {...props} />;
		case 4: return <Engagement {...props} />;
		}
	}

	return (
		<VStack spacing={0}>
			<NavBar showAuth={true} />
			<Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 55px)" bgRepeat="no-repeat" minH="100vh" minW="100vw" pt='1vh'>
				{getPage()}
			</Box>
		</VStack>

	);
}
