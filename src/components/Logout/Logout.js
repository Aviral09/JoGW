import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "962832623705-a7nlpkt0ps3bo3rdsov390bppfifrrp0.apps.googleusercontent.com";

function Logout() {
	const onSuccess = (res) => {
		console.log("Logged out");
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logout'
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
}

export default Logout;
