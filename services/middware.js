
const { getUser, setUser } = require('../services/auth')
async function restrictToLoggedInUsersOnly(req, res, next) {
 
     const token = req.cookies?.token;
 
    if (!token) {
        console.log('first  triggered...');
             return res.redirect('/login?error=Login to Explore...')
}
    var user = getUser(token);

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