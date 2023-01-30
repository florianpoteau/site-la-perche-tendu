'use strict';

/**
 * request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request.request');

// async function iiii() {
//     await strapi.plugins['email'].services.email.send({
//         to: formData.email,
//         from: 'florianpoteau59@gmail.com', //e.g. single sender verification in SendGrid
//         cc: 'florianpoteau59@gmail.com',
//         bcc: 'florianpoteau59@gmail.com',
//         replyTo: 'florianpoteau59@gmail.com',
//         subject: 'The Strapi Email plugin worked successfully',
//         text: 'Hello world!',
//         html: 'Hello world!',

//     })
// };




