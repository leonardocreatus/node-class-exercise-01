
import { faker } from '@faker-js/faker';

const users = [];


for(let i = 0; i < 100; i++) {
    users.push({
        id: i,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        gender: faker.person.sexType(),
        profile: faker.person.jobType(),
    })
}

export default users;