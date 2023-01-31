module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'solit641@gmail.com',
                defaultReplyTo: 'solit641@gmail.com',
            },
        },
    },
});