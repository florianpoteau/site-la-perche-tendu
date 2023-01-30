'use strict';

/**
 * request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::request.request');

// const { email } = strapi.plugins['email'].services;

// module.exports = {
//     async sendEmail(ctx) {
//         const { to, subject, text } = ctx.request.body;
//         try {
//             await email.send({
//                 to,
//                 subject,
//                 text,
//             });
//             ctx.send({ message: 'Email sent successfully' });
//         } catch (err) {
//             ctx.badRequest(err);
//         }
//     },
// };



// module.exports = {
//     async sendEmail(req, res) {
//         // Récupération des données du formulaire
//         const { to, subject, message } = req.body;

//         // Utilisation de l'extension de Sendgrid pour envoyer l'email
//         const result = await strapi.plugins['email'].services.email.send({
//             to,
//             subject,
//             text: message
//         });

//         // Traitement de la réponse
//         if (result) {
//             return res.send('Email envoyé avec succès');
//         } else {
//             return res.badRequest('Erreur lors de l\'envoi de l\'email');
//         }
//     }
// };

// const { send } = require('strapi-plugin-email');

// module.exports = {
//     async sendEmail(ctx) {
//         // Récupération des données du formulaire
//         const { name, email, message } = ctx.request.body;

//         // Configuration de l'email
//         const options = {
//             to: 'florianpoteau59@gmail.com',
//             from: email,
//             subject: 'Formulaire de contact',
//             text: message,
//             html: `<p>${message}</p>`,
//         };

//         // Envoi de l'email
//         try {
//             const response = await send(options);
//             console.log(response);
//         } catch (err) {
//             console.log(err);
//         }
//     },
// };






