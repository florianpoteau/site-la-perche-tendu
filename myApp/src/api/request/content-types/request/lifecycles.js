module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            console.log(result);
            await strapi.plugins['email'].services.email.send({
                to: 'florianpoteau59@gmail.com',
                from: 'florianpoteau59@gmail.com',
                subject: 'Formulaire de contact',
                text: `Non/Prenom: ${result.nom} ${result.prenom} <br> Email: ${result.email} <br> Tel: ${result.tel} <br> Texte: ${result.textarea}`,

            })
        }
        catch (err) {
            console.log(err);
        }

    }
}