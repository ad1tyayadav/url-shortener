const URL = require("../models/url")
const shortid = require("shortid")

const handleGetUrl = async (req, res) => {
    const id = req.params.id;

    try {
        const urlDoc = await URL.findOne({ shortUrl: id })

        if (urlDoc) {
            urlDoc.visitors += 1;
            await urlDoc.save();

            return res.redirect(urlDoc.fullUrl);

        } else {
            res.status(400).json({ error: "Url not found" })
        }
    } catch (error) {
        return res.status(500).json({ error: "Error Aagya bhai" })
    }

};

const handlePostUrl = async (req, res) => {
    const fullUrl = req.body.url; // Lowercase 'url' key body se li
    if (!fullUrl) {
        res.status(400).json({ error: "Url is required" })
    }
    const id = shortid.generate(); // shortid ko generate() se chalaya
    const newUrl = new URL({
        fullUrl: fullUrl,
        shortUrl: id
    });

    await newUrl.save();
    res.render("redirect", { id: id });

    return res.render("redirect")
}

module.exports = {
    handleGetUrl,
    handlePostUrl
}