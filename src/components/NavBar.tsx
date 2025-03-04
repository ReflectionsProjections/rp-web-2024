import { useEffect, useState } from 'react';
import { Avatar, Box, Button, HStack, Image, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Config from '../config';

interface NavBarProps {
	showAuth?: boolean;
}

export function NavBar({ showAuth = false }: NavBarProps) {
	const { isOpen, onToggle, onClose } = useDisclosure();
	const [isSmallScreen] = useMediaQuery("(max-width: 715px)");

	const [jwt, setJwt] = useState<string | null>("");
	const [registered, setRegistered] = useState(false);

	const navbarLinks = [
		{ label: "Events", href: "/#events" },
		{ label: "Speakers", href: "/speakers" },
		{ label: "PuzzleBang", href: "https://puzzlebang.com/" },
		{ label: "MechMania", href: "https://mechmania.org/" },
	];

	// const staffApplication = "https://bit.ly/rp2025application";

	const handleToggle = () => {
		console.log("Toggle clicked. Current isOpen state:", isOpen);
		onToggle();
	};

	useEffect(() => {
		setJwt(localStorage.getItem("jwt"));
		// console.log("jwt", jwt);
	});

	useEffect(() => {
		console.log("isOpen state changed:", isOpen);
	}, [isOpen]);

	const signOut = () => {
		localStorage.removeItem("jwt");
		setJwt(null);
		window.location.href = "/";
	};

	const isLoggedIn = () => {
		let isAlmostStaleJwt = false;

		// Check if the JWT is stale
		if (!jwt) {
			return false;
		}

		const jwt_decoded = jwtDecode(jwt);
		isAlmostStaleJwt = Date.now() > (jwt_decoded["exp"]! * 1000) - 30 * 60 * 1000;

		if (isAlmostStaleJwt) {
			localStorage.removeItem("jwt");
			setJwt(null);
			return false;
		}

		return true;
	};

	useEffect(() => {
		if (!jwt) return;
		axios.get(Config.BASE_URL + "attendee/", { headers: { Authorization: jwt } }).then(r => {
			if (r.status == 200) {
				setRegistered(true);
			} else {
				setRegistered(false);
			}
		}).catch(() => setRegistered(false));
	}, [jwt]);

	return (
		<Box position="relative">
			<HStack justify="space-between" width="100vw" height="60px" backgroundColor='#00456D' borderBottom='solid 3px #003B5C' zIndex={1000}>
				<Image m={3} onClick={() => window.location.href = '/'} src="/rp_logo.svg" alt="R|P LOGO alt" height="auto" maxW="58px" padding="0.5rem" cursor={"pointer"} transition={'ease-in 0.2s'} _hover={{ transform: 'scale(1.2)' }} />


				<Box>
					{isSmallScreen ? (
						<Box
							as="button"
							onClick={handleToggle}
							position="relative"
							width="30px"
							height="20px"
							marginTop="0.5rem"
							marginRight="1rem"
							transform="rotate(0deg)"
							transition=".5s ease-in-out"
							cursor="pointer"
						>
							{[1, 2, 3].map((i) => (
								<Box
									key={i}
									position="absolute"
									height="3px"
									width="100%"
									background="white"
									borderRadius="9px"
									opacity="1"
									left="0"
									transform={`rotate(0deg)`}
									transition=".25s ease-in-out"
									top={i === 1 ? "0" : i === 2 ? "9px" : "18px"}
									transformOrigin={i === 1 ? "left center" : i === 2 ? "left center" : "left center"}
									_groupHover={{ background: "gray.200" }}
									{...(isOpen && {
										top: i === 2 ? "9px" : "18px",
										width: i === 2 ? "0%" : "100%",
										left: i === 2 ? "50%" : "0",
										transform: `translateX(${i === 1 ? "5px" : i === 3 ? "5px" : "0"}) translateY(${i === 1 ? "-20px" : i === 3 ? "0px" : "0"}) rotate(${i === 1 ? "45deg" : i === 3 ? "-45deg" : "0"})`,
									})}
								/>
							))}
						</Box>
					) : (
						<HStack as="nav" spacing={2} p={4}>
							{navbarLinks.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									color="white"
									paddingX={4}
									paddingY={2}
									borderRadius={"5px"}
									border="1px solid transparent"
									_hover={{ backgroundColor: "#013B5C", borderColor: "white" }}
								>
									{item.label}
								</Link>
							))}
							{/* <Link
								href={staffApplication}
								color="white"
								padding={"7px 9px"}
								background={"#ae527a"}
								fontWeight={700}
								borderRadius={"5px"}
								border={"1.5px solid #ae527a00"}
								_hover={{ backgroundColor: "#875479", borderColor: "white" }}
								isExternal
							>
								Join Our Team!
							</Link> */}
							{(showAuth || isLoggedIn()) &&
								<Menu>
									<MenuButton
										as={Button}
										rounded={'full'}
										variant={'link'}
										cursor={'pointer'}
										minW={0}
										mr={2}>
										<Avatar bg='blue.900' size={'sm'} />
									</MenuButton>
									<MenuList>
										{registered && <>
											<MenuItem as="a" href="/myrp"> myRP </MenuItem>
											<MenuItem as="a" href="/myqr"> myQR </MenuItem>
										</>}
										<MenuItem onClick={signOut}>Sign Out</MenuItem>
									</MenuList>
								</Menu>
							}
						</HStack>
					)}
				</Box>

			</HStack>

			{isSmallScreen && (
				<VStack
					as="nav"
					spacing={4}
					bg="rgba(0, 69, 109, 0.95)"
					py={4}
					boxShadow="lg"
					align="center"
					position="absolute"
					top="60px"
					left={0}
					right={0}
					opacity={isOpen ? 1 : 0}
					visibility={isOpen ? "visible" : "hidden"}
					transform={`translateY(${isOpen ? '0' : '-20px'})`}
					transition="opacity 0.3s, visibility 0.3s, transform 0.3s"
					zIndex={999}
				>
					{navbarLinks.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							color="white"
							onClick={onClose}
						>
							{item.label}
						</Link>
					))}
					{/* <Link
						href={staffApplication}
						color="white"
						padding={"7px 9px"}
						background={"#ae527a"}
						fontWeight={700}
						borderRadius={"5px"}
						border={"1.5px solid #ae527a00"}
						_hover={{ backgroundColor: "#875479", borderColor: "white" }}
						isExternal
					>
								Join Our Team!
					</Link> */}
					{(showAuth || isLoggedIn()) &&
						<>
							<Link color="white" as="a" href="/myrp"> myRP </Link>
							<Link color="white" as="a" href="/myqr"> myQR </Link>
							<Link color="white" onClick={signOut}>Sign Out </Link>
						</>
					}
				</VStack>
			)}
		</Box>
	);
}
