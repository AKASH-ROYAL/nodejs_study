
const { getUser, setUser } = require('../services/auth')
async function restrictToLoggedInUsersOnly(req, res, next) {
    // console.log('initial of restrictToLoggedInUsersOnly...');

    // console.log(req);
    const uid = req.cookies?.uid;
    // console.log("uid : ", uid);

    if (!uid) {
        console.log('first  triggered...');
             return res.redirect('/login?error=Login to Explore...')
}
    var user = getUser(uid);

    if (!user) {
        console.log('second  triggered...');
   return res.redirect('/login?error=Login to Explore...');    

    };

    req.user = user;
    // console.log('end of restrictToLoggedInUsersOnly..');

    next();




}
module.exports = {
    restrictToLoggedInUsersOnly
};