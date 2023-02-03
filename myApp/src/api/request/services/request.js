'use strict';

/**
 * request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request.request');

send: async (ctx) => {
    const body = ctx.request.body
    const sendTo = body.email
    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
        const emailOptions = {
            to: sendTo,
            subject: 'This is a test',
            html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
        }
        await strapi.plugins['email'].services.email.send(emailOptions)
        strapi.log.debug(`Email sent to ${sendTo}`)
        ctx.send({ message: 'Email sent' })
    } catch (err) {
        strapi.log.error(`Error sending email to ${sendTo}`, err)
        ctx.send({ error: 'Error sending email' })
    }
}



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




