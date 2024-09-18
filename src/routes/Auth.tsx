import { Navigate } from "react-router-dom";
import Config from "../config";

const POST_AUTH_URL = "/register/";

export default function Auth() {
	console.log("rendering auth!");
	let jwt = localStorage.getItem("jwt");

	if (!jwt) {
		const urlSearchParams = new URLSearchParams(window.location.search);
		console.log("checking in params", urlSearchParams);
		window.history.pushState({}, document.title, "/");
		jwt = urlSearchParams.get("token");
		if (jwt) {
			localStorage.setItem("jwt", jwt);
		}
	}

	// jwt found in local storage
	if (jwt) {
		// console.log(jwt);
		return <Navigate to={POST_AUTH_URL} replace={true} />;
	} else {
		console.log("no jwt found! redirecting...");
		window.location.href = Config.BASE_URL + "auth/login/web/";
	}
}