import users from "../database/index.js";

// funcao que verifica se uma substring esta dentro do nome de um usuario
function includesInName(name, subs){

    // coloca o nome e a substring em caixa baixa
    const subsToLowerCase = subs.toLowerCase();
    const nameLowerCase = name.toLowerCase();

    // verifica se o nome possui a substring
    return nameLowerCase.includes(subsToLowerCase);
}

// funcao que procura um usuario por determinados parametros
export function userFindWhereRepository({ name, age, gender }) {
    
    return users.filter(user => {

        // procura pela idade, genero ou nome desejado, se nao achar retorna true
        const matchAge = age ? user.age === Number(age) : true;
        const matchGender = gender ? user.gender === gender : true;
        const matchName = name ? includesInName(user.firstName + user.lastName, name) : true;

        // retorna os parametros desejados na busca
        return matchAge && matchGender && matchName; 
 
    }).map(user => {
        return {
            ...user,
            password: undefined
        }

    })


}