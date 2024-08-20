import { Navigate } from "react-router-dom";

const POST_AUTH_URL = "/register/";

export default function Auth() {
	console.log("rendering auth!")
	let jwt = localStorage.getItem("jwt");

	if (!jwt) {
		console.log("no jwt found! redirecting...");
		const urlSearchParams = new URLSearchParams(window.location.search);
		window.history.pushState({}, document.title, "/");
		jwt = urlSearchParams.get("token");
		if (jwt) {
			localStorage.setItem("jwt", jwt);
		}
	}

	// jwt found in local storage
	if (jwt) {
		console.log(jwt);
		return <Navigate to={POST_AUTH_URL} replace={true} />;
	}
}