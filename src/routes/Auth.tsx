import { Navigate, useSearchParams } from "react-router-dom";
import Config from "../config";

const POST_AUTH_URL = "/register/";

export default function Auth() {
	const [searchParams] = useSearchParams();

	let jwt = localStorage.getItem("jwt");

	if (!jwt) {
		const urlSearchParams = new URLSearchParams(window.location.search);
		window.history.pushState({}, document.title, "/");
		jwt = urlSearchParams.get("token");
		if (jwt) {
			localStorage.setItem("jwt", jwt);
		}
	}

	// jwt found in local storage
	if (jwt) {
		return <Navigate to={POST_AUTH_URL} replace={true} />;
	}

	jwt = searchParams.get("token");

	if (jwt) {
		localStorage.setItem("jwt", jwt);
		return <Navigate to={POST_AUTH_URL} replace={true} />;
	} else {
		window.location.href = Config.BASE_URL + "auth/login/web/";
		return null;
	}
}