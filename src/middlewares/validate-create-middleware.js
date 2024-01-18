export function validateCreateMiddleware(req, res, next){
    const { name, age, gender } = req.query;
    
    if(!(name && age && gender))  return res.status(400).send({
        field: 'name, age, gender',
        desc: 'parametros requeridos'
    });

    if( name ){
        if(name.lenght() < 10){
            return res.status(400).send({
                field: 'name',
                desc: 'nome menor que 10 caracteres'
            });
        }
    }

    if( age ){
        if(Number.isNaN(Number(age)) || Number(age) < 0 || Number(age) > 100){
            return res.status(400).send({
                field: 'age',
                desc: 'ta errado isso sla'
            });
        }
    }

    if( gender ){
        if(gender != 'male' && gender != 'female'){
            return res.status(400).send({
                field: 'gender',
                desc: 'sla isso n e um genero'
            });
        }
    }

    next();
}