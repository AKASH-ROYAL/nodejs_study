
 const jwt= require('jsonwebtoken');
 const  secretKey= "Shortid@123"

function setUser(user){


return jwt.sign({
    id:user.id,
    email:user.email,
    role: user.role
},secretKey);
 
    }
    function getUser(token){
        

         return jwt.verify(token,secretKey);
        }


        module.exports={

             setUser,
            getUser
        };