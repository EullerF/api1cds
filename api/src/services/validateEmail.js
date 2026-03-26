
const connect = require ("../db/connect");

module.exports = async function validateEmail(email, cpf=null) {

    return new Promise((resolve, reject)=>{
        const query = "SELECT cpf FROM usuario WHERE email=?";

        connect.query(query, [email], (err,results) =>{
            if(err){
                reject("Erro ao verificar Email");
            }
            else if ( results.length > 0) {
                const cpfEncontrado =  results[0].cpf;

                if(cpf && cpfEncontrado !== cpf){
                    resolve({error: "Email já cadastrado para outro usuário"})
                } else {
                    resolve(null)
                }

            } else {
                resolve(null)
            }
        })
    }
    )



}