import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import './login.css'; // Import your CSS file

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = ({ provider, data }) => {
    console.log(provider, data);
    // Redirect to home page after successful login
    navigate('/home');
  };

  const handleLoginFailure = (err) => {
    console.log(err);
  };

  return (
    <div className="login-container">
      <LoginSocialGoogle
        client_id="436402841424-ffnp545k6u7arn4vj57oj9tclpernqmg.apps.googleusercontent.com"
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={handleLoginSuccess}
        onReject={handleLoginFailure}
      >
        <GoogleLoginButton className="custom-google-button" />
      </LoginSocialGoogle>
    </div>
  );
}

export default LoginPage;
