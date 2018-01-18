import { Usuario } from './conectors';
const resolvers = {
    Query: {
        allUsers(_, args){
            return Usuario.find({apeliido: 'Kirlin'}).then(
                (usuario) => {return usuario;}
            );
        }

    }
};

export default resolvers;