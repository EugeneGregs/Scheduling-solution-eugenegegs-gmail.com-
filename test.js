const bcrypt = require('bcrypt');
let cypher;
async function hash(){
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    cypher = await bcrypt.hash("123456", salt);
    console.log(cypher);
    comparePass();
}

function comparePass(){
    const pass = "123456";
    bcrypt.compare(pass, cypher, (err, isMatch) => {
        if(!err){
            if(isMatch)
                return console.log("Match!")
            else return console.log("No Match!")
        }
    })
}
hash()