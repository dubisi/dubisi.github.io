const PROXY_CONFIG = [
  {
    context: [
      "/api/profile/",
    ],
    target: "https://demaind-profile.azurewebsites.net",
    secure: false,
    pathRewrite: {
      "^/api/profile/": "/api/profile/"
    },
    changeOrigin: true,
  }
]

module.exports = PROXY_CONFIG;
