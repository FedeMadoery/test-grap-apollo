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
            return Usuario.findOneAndUpdate({'id' : args.id}, {$set:{edad: args.edad}}, {upsert:true}, function(err, doc){
                if (err) return console.log(err);
                return doc
            });
        }
    }
};

export default resolvers;