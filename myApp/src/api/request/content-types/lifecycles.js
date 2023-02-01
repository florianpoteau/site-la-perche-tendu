module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'florianpoteau59@outlook.fr',
                from: 'florianpoteau59@outlook.fr', // e.g. single sender verification in SendGrid
                cc: 'florianpoteau59@outlook.fr',
                bcc: 'florianpoteau59@outlook.fr',
                replyTo: 'florianpoteau59@outlook.fr',
                subject: 'The Strapi Email plugin worked successfully',
                text: `${result.nom} ça fonctionne ?`, // Replace with a valid field ID
                html: 'Hello world!',
            })
        } catch (err) {
            console.log(err);
        }
    }
}