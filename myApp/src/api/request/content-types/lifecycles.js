module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'solit641@gmail.com',
                from: 'solit641@gmail.com',
                subject: 'Jai réussi',
                Text: `Voici le resultat ${result.nom}`
            })
        } catch (err) {
            console.log(err);
        }
    }
}