const PROXY_CONFIG = [
  {
    context: [
      "/api/profile/",
    ],
    target: "https://localhost:7105",
    secure: false,
    changeOrigin: true,
  }
]

module.exports = PROXY_CONFIG;
