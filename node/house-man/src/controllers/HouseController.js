import mongoose from "mongoose";
import House from "../models/House.js";
import User from "../models/User.js";

class HouseController{
    async index(req, res){
        if (req.query.status === undefined ){

            const houses =  await House.find();
            return res.json(houses);
        };
        const { status } = req.query;
        const houses =  await House.find({status});
        return res.json(houses);
    }   

    async show(req, res){
        const {id} = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: "FORMATO DE ID INVÁLIDO"});
        }
        const house = await House.findById(id);
        if (!house){
            return res.status(404).json({message: "CASA INEXISTENTE"});
        }
        return res.json({house});
    }

    async store(req, res){
        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })
        return res.json(house);
    }

    async destroy(req, res){
        const {user_id} = req.headers;
        const {id} = req.body;
        
        const house = await House.findById(id);
        const user = await User.findById(user_id);
        
        if ( house.user._id != user_id){
            return res.status(400).json({message: "ERRO DE ID"})
        }
        if(!house){
            return res.status(400).json({message: "CASA INEXISTENTE"})
        }
        await House.findByIdAndDelete(id);
        return(res.json({ok: "true"}))
    }
}

export default new HouseController();