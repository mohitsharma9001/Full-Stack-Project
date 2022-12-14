import User from "../schema/UserSchema.js"

export const AddUser =async (req,res) => {
  const user = req.body
  const newUser = new User(user)

  try {
   await newUser.save()
   res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({message : error.message})
  }
}


export const getUser =async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
  
  }
 

