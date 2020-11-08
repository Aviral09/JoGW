import React from "react";
import { GoogleLogin, useGoogleLogout } from "react-google-login";

const clientId =
	"962832623705-a7nlpkt0ps3bo3rdsov390bppfifrrp0.apps.googleusercontent.com";

function Login() {
	const onLogoutSuccess = (res) => {
		console.log("Logged out");
	};

	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
	});

	const onSuccess = (res) => {
		var email = res.profileObj.email;
		var str = email.match(/@goa.bits-pilani.ac.in/i);
		if (str === null) {
			signOut();
			alert("Login using BITS mail only");
			alert("Logged out");
		}
		else
			console.log(res);
	};

	const onFailure = (err) => {
		console.log(err);
	};

	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText='Login'
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				style={{ position: "absolute", top: "50%" }}
				isSignedIn={true}
			/>
		</div>
	);
}

export default Login;
