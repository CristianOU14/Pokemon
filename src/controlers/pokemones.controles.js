import { getConnection } from "../database/database.js";
const getpokemones = async (req,res) =>
    {   
        try 
        {
            const connection = await getConnection()
            const result = await connection.query('SELECT * FROM pokemon')
            res.json(result[0]);
        } catch (error) 
        {
            console.log ('error');
            res.status(500)
        }
    }
const getdespedida = (req,res) =>
    {
        return res.send("Adios Mundo")
    }
export const metodosPokemones = {
    getpokemones,getdespedida
};
