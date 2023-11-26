const Form = require('../models/form')
const axios = require('axios')
class FormController {
    async create(req, res) {
        try {
            const {
                name, 
                surname, 
                adress, 
                zipcode, 
                city, 
                country, 
                email, 
                phone,
                order
            } = req.body;

            const item = await new Form({
                name,
                surname,
                adress, 
                zipcode, 
                city, 
                country, 
                email, 
                phone,
                order
            }).save()

            const telegramBotToken = '6535812659:AAFBTonq65o3308hN-2tAI9RHIkqAXjComI';
            const chatId = '909643702';
            const message = `New form submission:\nName: ${name}\nSurname: ${surname}\nAddress: ${adress}\nZipcode: ${zipcode}\nCity: ${city}\nCountry: ${country}\nEmail: ${email}\nPhone: ${phone}\n Название товара ${order.name} | Количество ${order.count} | Цена с доставкой ${order.priceWithDelivery}`;

            await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                chat_id: chatId,
                text: message
            });

            res.status(200).send({created: "true", item})
        } catch (e) {
            console.log(e),
            res.status(400).send({error: `${e}`})
        }
    }
    async get(req, res) {
        try {
            const items = await Form.find();

            res.status(200).send({items})
        } catch (e) {
            console.log(e),
            res.status(400).send({error: `${e}`})
        }
    }
}
module.exports = new FormController()
