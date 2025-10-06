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
        let user = await User.create({email});

        return res.json(email);
    }

}

export default new SessionControler();