export const config = {
  axios: {
    asbBaseUrl: process.env.ASB_BASE_URL ?? "http://localhost:5000",
    asbKeyUrl: process.env.ASB_KEY_URL ?? "asb",
  },
};
