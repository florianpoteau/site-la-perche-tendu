'use strict';

/**
 * request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::request.request');

// path: src/api/request/routes/request

// send: async (ctx) => {
//     const body = ctx.request.body
//     const sendTo = body.email
//     strapi.log.debug(`Trying to send an email to ${sendTo}`)

//     try {
//         const emailOptions = {
//             to: sendTo,
//             subject: 'This is a test',
//             html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
//         }
//         await strapi.plugins['email'].services.email.send(emailOptions)
//         strapi.log.debug(`Email sent to ${sendTo}`)
//         ctx.send({ message: 'Email sent' })
//     } catch (err) {
//         strapi.log.error(`Error sending email to ${sendTo}`, err)
//         ctx.send({ error: 'Error sending email' })
//     }
// }

