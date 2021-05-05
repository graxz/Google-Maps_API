const express = require('express')
const router = new express.Router()
const axios = require('axios');

router.get('', async (req, res) => {
    try {
        const regions = await axios.get(`http://images.contelege.com.br/poi.json`).then(res => {
            return res.data;
        })

      res.status(201).json({ sucess: true, regions })
    } catch (e) {
        res.status(400).json({ sucess: false, error: e })
    }
})

module.exports = router