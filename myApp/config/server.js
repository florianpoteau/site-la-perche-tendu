// const corsOptions = {
//   origin: 'http://127.0.0.1:5500',
//   methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
//   headers: 'Content-Type, Authorization',
//   credentials: true
// };

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
    // middlewares: {
    //   before: [
    //     cors(corsOptions)
    //   ],
    // },
  },
});
