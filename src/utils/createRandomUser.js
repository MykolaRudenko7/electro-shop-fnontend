import { faker, fakerUK } from '@faker-js/faker'

export default function createRandomUser() {
  return {
    userName: faker.helpers.fromRegExp('[a-zA-Z]{12}'),
    email: faker.internet.email(),
    password: faker.internet.password(),
    mobNumber: fakerUK.phone.number(),
  }
}
