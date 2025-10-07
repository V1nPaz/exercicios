import mongoose from "mongoose";
import User from "../models/User.js";

//index, show, update, store e destroy
//index: listagem de sessões
//store: criar uma sessão
//show: listar uma única sessão
//update: alterar/atualizar uma sessão
//destroy: deletar uma sessão
class SessionControler{
    async index(req, res){
        const users = await User.find();
        return res.json({users: users});
    }

    async store(req, res){
        const { email } = req.body;

        //Verifica 
        let user = await User.findOne({email});
        if (!user){
            user = await User.create({email});
        }
        return res.json(user);
    }

    async destroy(req, res){
        const {id} = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: "ID inválido"});
        }
        await User.findByIdAndDelete(id);
        return res.json({message: "OK"}) ;
    }

}

export default new SessionControler();