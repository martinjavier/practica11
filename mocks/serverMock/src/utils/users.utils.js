import {faker} from '@faker-js/faker';
faker.locale='es';

export default function generateUser() {
    return {
        nombre: faker.name.firstName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        imagen: faker.image.imageUrl()
    }
}