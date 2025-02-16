
const { getUser, setUser } = require('../services/auth');



async function checkUserAuthentication(req, res, next) {
    req.user = null;
    // const value = req.headers['authorization'];
    // const value = req.headers['authorization'];
      
    //  if (!value || !value.startsWith("Bearer ")) return next();

    // const token = value.split('Bearer ')[1];
    // console.log("token",token)
    var token = req.cookies?.token;
    if(!token) return next();

    const user = getUser(token);

    req.user = user;

    return next();



}

function restrictToRoles(role = []) {
console.log('restrictToRoles initiated...');
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login');
// console.log('req.user.role : ' , req.user.role);
// console.log('req.user.role : ' , req.user.id);
// console.log('req.user.role : ' , req.user.email);
        if (!role.includes(req.user.role)) {
            return res.end("UnAuthorized");

        }
        return next();


    }

}

module.exports = {
    checkUserAuthentication,
    restrictToRoles
};