

export function validateFindWhereMiddleware(req, res, next) {
    const { name, age, gender } = req.query;
    
    if( name ) {
        // se é valido
    }

    if ( age ) {
        if (Number.isNaN(Number(age))){
            return res.status(400).send({
                field: 'age',
                description: 'not a number'
            });
        }
    }

    if( gender) {
        // se é valido
        if (gender != 'male' && gender != 'female'){
            return res.status(400).send({
                field: 'gender',
                description: 'nao e um genero'
            })
        }
    }

    next();
}