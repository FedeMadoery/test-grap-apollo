
import Mongoose from 'mongoose';
import casual from 'casual';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://puchoo:mongo1234@40.84.38.216:27017/cool_db', {
    useMongoClient: true
});

const UsuarioSchema = Mongoose.Schema({
    apellido: String,
    createdAt: String,
    email: String,
    id: Number,
    isPublished: Boolean,
    nombre: String,
    password: String,
    edad: Number,
    updatedAt: String
});


const Usuario = Mongoose.model('usuarios', UsuarioSchema);


let i = 0;
for (i=0; i<10; i++) {
    // modify the mock data creation to also create some views:
    casual.seed(Math.random()*1000000*i);
    Usuario.create(
        {
            apellido: casual.last_name,
            createdAt: casual.date('DD-MM-YYYY'),
            email: casual.email,
            id: casual.integer(0, 99999999),
            isPublished: false,
            nombre: casual.first_name,
            edad: casual.integer(18,120),
            password: casual.password,
            updatedAt: casual.date('DD-MM-YYYY')
            , function (err, small) {
            if (err) {
                console.log(err)
            };
            // saved!
        }
        });
}







// at the bottom, add View to the exports
export { Usuario };