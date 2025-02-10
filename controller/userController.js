import { userModel } from "../postgres/db.js";

export const getAllEmp=async(req,res)=>{
    try{
    const users = await userModel.findAll(); 
    if(users.length==0){
        return res.status(404).json({"error":"Users not found"})
    }
        return res.status(200).json(users)

    }
    catch(error){

        console.log(error)
        return res.status(500).json({"error":"Internal server error"})
    }
}

export const addEmp=async(req,res)=>{
    const {empId}=req.body;
    try{
        const emp= await userModel.findOne({where:{empId:empId}});
        if (emp==null) {
            await userModel.create(req.body);
            return res.status(201).json({message:"emp added successfully"});
        }
        return res.status(200).json({message:"emp already exists"});

    }
    catch(error){
        console.log(error)
        return res.status(500).json({"error":"Internal server error"})
    }
}
/**
 *  update existing user
 */

const update = async (req, res) => {

    try {
        const empId = req.params.empId || null;

        const body = req.body;
        console.log(req.params)
        //checking if user exist or not
        const oldUser = await userModel.findOne({ where: { empId } })
        if (!oldUser) {
            return res.status(500).send({ message: "User not found" });
        }
        oldUser.name = body.name;
        oldUser.password = body.password || oldUser.password;
        oldUser.email = body.email
        oldUser.save();
        res.status(201).send({ data: oldUser, message: "user updated successfully" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Failed to update users' });
    }
}

/**
 *  delete user 
 */
const deleteById = async (req, res) => {

    try {
        const empId = req.params.empId || null;

        const oldUser = await userModel.findOne({ where: { empId } })

        //checking if user exist or not
        if (!oldUser) {
            return res.status(500).send({ message: "User not found" });
        }
        oldUser.destroy();
        res.status(201).send({ message: "user deleted successfully" })
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

/**
 *  fetch user by id
 */
const getById = async (req, res) => {

    try {
        const empId = req.params.empId || null;

        const user = await userModel.findOne({ where: { empId } })
        if (!user) {
            return res.status(500).send({ message: "User not found" });
        }
        res.status(201).send({ message: "user fetched successfully", data: user })
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}


export const userController = {
    getAllEmp,
    addEmp,
    getById,
    deleteById,
    update
}