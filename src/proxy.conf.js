const PROXY_CONFIG = [
  {
    context: [
      "/api/profile/",
    ],
    target: "https://demaind-profile.azurewebsites.net",
    secure: false,
    changeOrigin: true,
  }
]

module.exports = PROXY_CONFIG;
