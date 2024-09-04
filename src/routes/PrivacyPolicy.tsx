import { VStack } from "@chakra-ui/react";

export function PrivacyPolicy() {
	return <VStack height="100vh" bg="#1A446A" color="white" padding="20px">
		<header> 
        Introduction
		</header>

		<text>
        Welcome to the Reflections | Projections app (the “App”). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information when you use our App.
		</text>
        
		<header>
        Information We Collect
		</header>

		<text>
        a. Personal Information:
        We may collect personal information that you provide directly to us, including but not limited to your name, email address, phone number, and any other information you choose to provide.

        b. Usage Data:
        We automatically collect certain information when you use the App, such as your IP address, device type, operating system, app usage patterns, and other diagnostic data.
		</text>

		<header> How We Use Your Information </header>

		<text>
        a. To provide and maintain our App:
        We use your information to operate and provide the features of the App.

        b. To communicate with you:
        We may use your information to contact you with updates, promotional materials, or other information that may be of interest to you.

        c. To improve our services:
        We use the information we collect to understand how users interact with the App and to improve and optimize its functionality.
		</text>

		<header>
        Sharing Your Information
		</header>

		<text>
        a. Service Providers:
        We may share your information with third-party service providers who assist us in operating the App, conducting our business, or serving our users.

        b. Legal Requirements:
        We may disclose your information if required to do so by law or in response to valid requests by public authorities.
		</text>

		<header>
        Data Security
		</header>

		<text>
        We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
		</text>

		<header>
        Your Choices
		</header>    

		<text>
        a. Access and Update:
        You can access and update your personal information through the App’s settings.

        b. Opt-out:
        You may opt-out of receiving promotional communications from us by following the unsubscribe instructions in those communications or by contacting us directly.
		</text>

		<header>
        Children’s Privacy
		</header>

		<text>
        Our App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
		</text>

		<header>
        Changes to This Privacy Policy
		</header>

		<text>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
		</text>

		<header>
        Contact Us
		</header>

		<text>
        If you have any questions about this Privacy Policy, please contact us at contact@reflectionsprojections.org
		</text>
    

	</VStack>;
}