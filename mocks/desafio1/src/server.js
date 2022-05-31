import express, { json, urlencoded } from 'express';
import {faker} from '@faker-js/faker';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

//const nombres = ['Luis','Lucia','Juan','Augusto','Miguel','Marcelo','Roberto','Manuela','Natalia',];
//const apellidos = ['Perez','Cacurri','Bezzola','Alberca'];
//const colores = ['Amarillo','Azul','Verde','Rojo','Blanco'];

app.get('/test/:n', (req,res) => {
    const n = req.params.n;
    const users = [];
    for (let i = 1; i <= n; i++) {
        const user = {
            id: i,
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            color: faker.commerce.color()
        }
        users.push(user);        
    }
    res.status(200).json({users});
})

const PORT = 3000
const server = app.listen(PORT, () => { console.log(`🔥 Server started on localhost on http://localhost:${PORT}`)});
server.on('error', (err) => console.log(err));