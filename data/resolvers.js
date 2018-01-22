import { Usuario } from './conectors';
const resolvers = {
    Query: {
        allUsers(_, args) {
            return Usuario.find({}).then(
                (usuario) => {return usuario;}
            );
        },
        findUser(_, args) {
            return Usuario.findOne({email: args.email}).then(
                (user) => {
                    console.log(JSON.stringify(user));
                    return user;
                }
            );
        },
        updateUser(_, args){
            return Usuario.findOneAndUpdate({'id' : args.id}, {$set:{edad: args.edad}}, {upsert:true}).exec()
                .then(user => {
                    console.log(user)
                    // you could modify the object being handed to GraphQL here
                    return user // IF you use a then, make sure you return the value!!
                });
        }
    }
};

export default resolvers;