module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e87e31b41a6f3ff4b6c69bca03bde75'),
  },
});
