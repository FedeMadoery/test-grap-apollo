import { Usuario } from './conectors';
const resolvers = {
    Query: {
        allUsers(_, args) {
            return Usuario.find({}).then(
                (usuario) => {return usuario;}
            );
        },
        findUser(_, args) {
            return Usuario.findOne({email: args.em}).then(
                (user) => {
                    console.log(JSON.stringify(user));
                    return user;
                }
            );
        }
    }
};

export default resolvers;