module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'florianpoteau59@outlook.fr',
                from: 'florianpoteau59@outlook.fr',
                subject: ' Bonjour',
                text: `Your todo is: ${result.nom}`
            })
        }
        catch (err) {
            console.log(err);
        }

    }
}