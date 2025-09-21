module.exports = {
  apps: [
    {
      name: "BackendAPI",
      script: "server.js",   // 👈 change if your entry file is app.js or index.js
      env: {
        NODE_ENV: "production",
        MONGO_DB_URL: process.env.MONGO_DB_URL,
      }
    }
  ]
};
