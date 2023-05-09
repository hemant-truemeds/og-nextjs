module.exports = {
  apps: [
    {
      script: "npm start",
      // watch: ".",
    },
    // , {
    //   script: './service-worker/',
    //   watch: ['./service-worker']
    // }
  ],

  deploy: {
    production: {
      key: "tm-stage-microservice.pem",
      user: "centos",
      host: "65.0.26.92",
      ref: "origin/pm2-ssr",
      repo: "git@github.com:hemant-truemeds/og-nextjs.git",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
