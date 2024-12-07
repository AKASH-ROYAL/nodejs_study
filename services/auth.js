
 sessionIdToUserMap= new Map();


function setUser(id,user){

    sessionIdToUserMap.set(id,user);
        // console.log("sessionIdToUserMap : ",sessionIdToUserMap)

    }
    function getUser(id){

        // console.log("sessionIdToUserMap : ",sessionIdToUserMap)
        return sessionIdToUserMap.get(id);
        
        }


        module.exports={

             setUser,
            getUser
        };