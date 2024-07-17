import { Navigate, useSearchParams } from "react-router-dom";
import  Config  from "../config";


export default function Auth() {
    const [searchParams] = useSearchParams();
    let jwt = localStorage.getItem("jwt");
    const POST_AUTH_URL = `/registration?token=${jwt}`

    // jwt found in local storage
    if (jwt) {
        return <Navigate to={POST_AUTH_URL} />;
    }

    jwt = searchParams.get("token");

    // jwt found in new outcome
    if (jwt) {
        localStorage.setItem("jwt", jwt);
        return <Navigate to={POST_AUTH_URL} />;
        console.log(jwt)
    } else {
        console.log("Redirecting to adonix login...");
        window.location.href = Config.BASE_URL + "auth/login/web";
        return null;
    }
}
