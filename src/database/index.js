
import { faker } from '@faker-js/faker';

const users = [];


users.push({
    id: 0,
    firstName: faker.person.fullName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({
        min: 0,
        max: 100
    }),
    email: 'admin@admin.com',
    gender: faker.person.sexType(),
    profile: 'Manager',
    password: '123456'
})

for(let i = 1; i < 100; i++) {
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
        password: faker.internet.password()
    })
}

export default users;