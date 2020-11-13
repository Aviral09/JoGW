import React, { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '962832623705-a7nlpkt0ps3bo3rdsov390bppfifrrp0.apps.googleusercontent.com';

function Logout() {
  useEffect(() => {
    const url = window.location.href;
    const code = url.split('?code=')[1].split('&scope=')[0];

    // console.log(code);

    if (code) {
      async function fetchData() {
        try {
          const response = await (
            await fetch(
              `http://localhost:5000/api/user/oauthlogin?code=${code}`,
              {
                method: 'GET',
                'Content-Type': 'application/json',
              }
            )
          ).json();

          if (!response.ok) {
            window.location.href = '/login';
          } else {
            alert('Yay you logged in!');
          }
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }
  });

  const onSuccess = (res) => {
    console.log('Logged out');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
