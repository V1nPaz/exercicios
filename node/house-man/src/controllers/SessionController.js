import User from "../models/User.js";

//index, show, update, store e destroy
//index: listagem de sessões
//store: criar uma sessão
//show: listar uma única sessão
//update: alterar/atualizar uma sessão
//destroy: deletar uma sessão
class SessionControler{
    async store(req, res){
        const { email } = req.body;

        //Verifica 
        let user = await User.findOne({email});
        if (!user){
            user = await User.create({email});
        }
        return res.json(user);
    }

}

export default new SessionControler();