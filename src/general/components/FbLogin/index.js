import React from "react";
import FacebookLogin from "react-facebook-login";

const FbLoginButton = (props) => {
  const fbAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

  const handleFacebookCallback = (response) => {
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with facebook Login.");
      return;
    }
    console.log(response);
  };

  return (
    <FacebookLogin
      buttonStyle={{
        marginTop: "12px",
        padding: "12px 12px",
        backgroundColor: "#1877F2",
        fontSize: "12px",
        width: "100%",
        borderRadius: "6px",
        borderWidth: "0px",
      }}
      appId={fbAppId}
      autoLoad={false}
      fields="name,email,picture"
      callback={handleFacebookCallback}
    />
  );
};
export default FbLoginButton;
