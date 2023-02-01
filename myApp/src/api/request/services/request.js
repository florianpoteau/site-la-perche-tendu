'use strict';

/**
 * request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request.request');



// await strapi.plugins['email'].services.email.send({
//     to: formData.email,
//     from: 'florianpoteau59@outlook.fr', //e.g. single sender verification in SendGrid
//     cc: 'florianpoteau59@outlook.fr',
//     bcc: 'florianpoteau59@outlook.fr',
//     replyTo: 'florianpoteau59@outlook.fr',
//     subject: 'The Strapi Email plugin worked successfully',
//     text: 'Hello world!',
//     html: 'Hello world!',

// });




