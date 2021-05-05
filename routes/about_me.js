const express = require('express')
const router = new express.Router()

router.get('/about-me', async (req, res) => {
    try {
        res.status(201).json({ sucess: true })
    } catch (e) {
        res.status(400).json({ sucess: false, error: e })
    }
})

module.exports = router