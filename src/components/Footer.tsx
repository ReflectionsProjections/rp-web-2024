import { Box, HStack, Image, IconButton, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok, FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons
import { MdEmail } from 'react-icons/md';

function Footer() {
	const [isSmall] = useMediaQuery("(max-width: 600px)");

	return (
		<Box
			as="footer"
			width="100%"
			backgroundColor="#00456D"
			borderTop="solid 3px #003B5C"
			padding="1rem"
			position="relative"
			bottom="0"
		>
			<HStack
				spacing={4}
				width="100%"
				alignItems="center"
				justify="center"
				height={"min-content"}
			>
				<Link href="https://www.instagram.com/uiuc_rp?igsh=MzRlODBiNWFlZA==" isExternal>
					<IconButton
						aria-label="Instagram"
						icon={<FaInstagram />}
						color="white"
						variant="ghost"
						fontSize="1.5rem"
					/>
				</Link>

				<Link href="https://www.facebook.com/acmrp/" isExternal>
					<IconButton
						aria-label="Facebook"
						icon={<FaFacebook />}
						color="white"
						variant="ghost"
						fontSize="1.5rem"
					/>
				</Link>

				<Link href="https://www.linkedin.com/company/reflections-projections-uiuc/" isExternal>
					<IconButton
						aria-label="LinkedIn"
						icon={<FaLinkedin />}
						color="white"
						variant="ghost"
						fontSize="1.5rem"
					/>
				</Link>

				<Link href="https://www.tiktok.com/@uiuc_rp" isExternal>
					<IconButton
						aria-label="TikTok"
						icon={<FaTiktok />}
						color="white"
						variant="ghost"
						fontSize="1.5rem"
					/>
				</Link>

				<Link href="https://github.com/ReflectionsProjections" isExternal>
					<IconButton
						aria-label="GitHub"
						icon={<FaGithub />}
						color="white"
						variant="ghost"
						fontSize="1.5rem"
					/>
				</Link>

				<Link href="mailto:contact@reflectionsprojections.org" isExternal>
					<IconButton
						aria-label="Email"
						icon={<MdEmail />}
						color="white"
						variant="ghost"
						fontSize="1.5rem"
					/>
				</Link>
			</HStack>
			


			<HStack spacing={4} width="100%" alignItems="center" justify="center" mt="1rem">
				<Box cursor={'pointer'} position={'relative'} onClick={() => window.location.href='https://www.acm.illinois.edu/'}>
					<Image src="/acmuiuclogo.png" alt="ACM@UIUC" width="100px" height="auto"  />
				</Box>
				<Text fontWeight="bold" color="white" fontSize="1em">
					&copy; 2024 by {isSmall ? "R|P" : "Reflections | Projections"}
				</Text>
			</HStack>
		</Box>
	);
}

export default Footer;