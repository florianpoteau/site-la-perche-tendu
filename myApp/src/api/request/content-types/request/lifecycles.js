module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            console.log(result);
            await strapi.plugins['email'].services.email.send({
                to: 'florianpoteau59@gmail.com',
                from: 'florianpoteau59@gmail.com',
                subject: 'Formulaire de contact',
                text: `Nom / Prenom: ${result.nom} ${result.prenom} <br> <br> Email: ${result.email} <br> <br> Tel: ${result.tel} <br> <br> Texte: ${result.textarea}`,

            })
        }
        catch (err) {
            console.log(err);
        }

    }
}