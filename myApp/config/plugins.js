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