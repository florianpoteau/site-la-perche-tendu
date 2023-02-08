// module.exports = ({ env }) => ({
//     email: {
//         config: {
//             provider: 'sendgrid',
//             providerOptions: {
//                 apiKey: env('SENDGRID_API_KEY'),
//             },
//             settings: {
//                 defaultFrom: 'florianpoteau59@outlook.fr',
//                 defaultReplyTo: 'florianpoteau59@outlook.fr',
//             },
//         },
//     },
// });



// path: config/plugins.js



module.exports = ({ env }) => {
    console.log("Email configuration: ", {
        config: {
            provider: env('EMAIL_PROVIDER'),
            providerOptions: {
                host: env('EMAIL_SMTP_HOST', 'smtp-relay.sendinblue.com'),
                port: env('EMAIL_SMTP_PORT', 587),
                auth: {
                    user: env('EMAIL_SMTP_USER'),
                    pass: env('EMAIL_SMTP_PASS'),
                },
            },
        },
        settings: {
            defaultFrom: env('EMAIL_ADDRESS_FROM'),
            defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
        },
    });

    return {
        // ...
        email: {
            provider: env('EMAIL_PROVIDER'),
            providerOptions: {
                host: env('EMAIL_SMTP_HOST', 'smtp-relay.sendinblue.com'),
                port: env('EMAIL_SMTP_PORT', 587),
                auth: {
                    user: env('EMAIL_SMTP_USER'),
                    pass: env('EMAIL_SMTP_PASS'),
                },
            },
            settings: {
                defaultFrom: env('EMAIL_ADDRESS_FROM'),
                defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
            },
        },
        // ...
    };
};
// port 587 ou 465


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