module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'solit641@gmail.com',
                from: 'solit641@gmail.com', // e.g. single sender verification in SendGrid
                cc: 'solit641@gmail.com',
                bcc: 'solit641@gmail.com',
                replyTo: 'solit641@gmail.com',
                subject: 'The Strapi Email plugin worked successfully',
                text: `${result.nom} ça fonctionne ?`, // Replace with a valid field ID
                html: 'Hello world!',
            })
        } catch (err) {
            console.log(err);
        }
    }
}