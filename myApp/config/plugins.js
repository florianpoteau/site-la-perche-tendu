module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'florianpoteau59@outlook.fr',
                defaultReplyTo: 'florianpoteau59@outlook.fr',
            },
        },
    },
});



// module.exports = ({ env }) => ({
//     // ...
//     email: {
//         config: {
//             provider: 'nodemailer',
//             providerOptions: {
//                 host: env('SMTP_HOST', 'smtp.example.com'),
//                 port: env('SMTP_PORT', 587),
//                 auth: {
//                     user: env('SMTP_USERNAME'),
//                     pass: env('SMTP_PASSWORD'),
//                 },
//                 // ... any custom nodemailer options
//             },
//             settings: {
//                 defaultFrom: 'hello@example.com',
//                 defaultReplyTo: 'hello@example.com',
//             },
//         },
//     },
//     // ...
// });