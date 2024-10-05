import database from "../database/database.js";

const getpokemones = (req,res) =>
    {
        const pokemones = database.map((item)=> item);
        res.json(pokemones);
    }
const getdespedida = (req,res) =>
    {
        return res.send("Adios Mundo")
    }
export const metodosPokemones = {
    getpokemones,getdespedida
};