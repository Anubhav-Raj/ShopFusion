const axios = require("axios");
const qs = require("qs");

const getGoogleOauthToken = async ({ code }) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Disable SSL verification
  const rootURl = "https://oauth2.googleapis.com/token";
  // console.log("code", code);
  const options = {
    code,
    client_id: process.env.googleClientId,
    client_secret: process.env.googleClientSecret,
    redirect_uri: process.env.googleOauthRedirect,
    grant_type: "authorization_code",
  };
  try {
    const { data } = await axios.post(rootURl, qs.stringify(options), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return data;
  } catch (err) {
    console.log("Failed to fetch Google Oauth Tokens");
    throw new Error(err);
  }
};

const getGoogleUser = async ({ id_token, access_token }) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Disable SSL verification
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    );

    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

module.exports = {
  getGoogleOauthToken,
  getGoogleUser,
};
