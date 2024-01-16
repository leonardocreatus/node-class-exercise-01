
import { faker } from '@faker-js/faker';

const users = [];


for(let i = 0; i < 100; i++) {
    users.push({
        id: i,
        firstName: faker.person.fullName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({
            min: 0,
            max: 100
        }),
        email: faker.internet.email(),
        gender: faker.person.sexType(),
        profile: faker.person.jobType(),
    })
}

export default users;