

// middleware.js

// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   'strapi::poweredBy',
//   {
//     name: 'strapi::cors',
//     config: {
//       enabled: true,
//       header: '*',
//       origin: ['http://127.0.0.1:5500', 'http://localhost:1337']
//     }
//   },
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


