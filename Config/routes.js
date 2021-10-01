const express = require('express');
const axios = require('axios')
const routes = express.Router();
const Links = require('../config');

routes.get('/', async (req, res) => {
  return res.json({ Erro: "Rota Desconhecida" })
});

async function getIp(ip) {
  const response = await axios.get(`https://ipinfo.io/${ip}?token=9c8a933f1acc15`);
  return response.data.city;
}

routes.post('/add', async (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).end();
  const newKey = await Links.doc();

  const dados = await getIp('131.255.112.251');

  const obj = {
    id: newKey.id,
    link: body.link,
    ip: body.ip,
    data: body.data,
    cidade: dados,
    visitas: 0
  };

  await newKey.set(obj)

  return res.json({ link: `https://www.meencurta.com.br/${newKey.id}` });
});

routes.post('/link', async (req, res) => {
  console.log(req.body);
  const { id } = req.body;

  const all = await Links.get();
  const ids = all.docs.map((doc) => doc.id);

  if (ids.includes(id)) {
    const snapshot = await Links.doc(req.body.id).get();
    const data = await snapshot.data();
  
    await Links.doc(id).update({
      visitas: Number(data.visitas) + 1,
    });
  
    return res.json({ link: data.link })
  }
  return res.json({ link: 'não encontrado' });

});

module.exports = routes;