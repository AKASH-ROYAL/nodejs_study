
const shortid = require('shortid');
const URL = require('../models/url');
async function handleGenerateShortId(req, res) {

    var body = req.body;

    if (!body.url) return res.status(400).json({ error: "url is required.." });
    var shortID = shortid(8);
    console.log(req.user.id);
    await URL.create({
        shortid: shortID,
        redirectUrl: body.url,
        visitHistroy: [],
        createdBy:req.user.id
    });

    return res.status(201).redirect('/');
}

async function handleRedirectUrl(req, res) {

    var id = req.params.id;
console.log(' handleRedirectUrl id' , id);
    const entry = await URL.findOneAndUpdate({ shortid: id }, {

        $push: { visitHistory: { timeStamp: Date.now() } }

    });
    console.log('entry.redirectUrl : ', entry)


    return res.status(301).redirect(entry.redirectUrl);

}


async function handleAnalytics(req, res) {


    var id = req.params.id;
    console.log("id: " ,id)
    const entry = await URL.findOne({shortid: id });
    return res.status(200).json({
        totalClicks: entry.visitHistory.length,


        visitHistory: entry.visitHistory

    })
}

module.exports = {
    handleGenerateShortId,
    handleRedirectUrl,
    handleAnalytics
}