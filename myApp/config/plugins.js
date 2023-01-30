module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('cd 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'),
        },
    },
});