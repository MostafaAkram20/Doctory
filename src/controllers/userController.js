import User from "../models/User.js"

//////////////////////////////////////////////////
export const get_profile = (req,res, next)=>{
try {
    
const {user} = req

if(!user)
    next(new Error ("error in get user " ,{cause:400}))

res.status(200).json({sucess:true , data : user})
} catch (error) {
    

return res.status(500).json({secuss:false , msg : error.mssage})

}

}

////////////////////////////////////////////

export const update_profile = async(req,res,next)=>{
try {
    
const {user} = req
    const userId = req.user._id

  const data = req.body 
  console.log(data);
  
     

    const updatedUser = await user.findByIdAndUpdate(
      userId,
      {$set :data},
      {
        new: true,
        runValidators: true
      }
    )


    if(!updatedUser)
        return next(new Error ("user not update" , {cause:400}))

    res.json({
      success: true,
      data: updatedUser
    })




} catch (error) {
    
return res.status(500).json({secuss:false , msg : error.mssage})


}
}

////////////////////////////////////////////
export const delet_profile =async(req,res,next)=>{

try {
    
const {user} = req
    const userId = req.user._id

    

    const deletedUser = await user.findByIdAndDelete(
      userId
    )

if (!deletedUser) 
    return next(new Error("user not Delete" , {cause : 400}))

    res.json({
      success: true,
      msg:"user is Delete"
    })

} catch (error) {
    
    return res.status(500).json({secuss:false , msg : error.mssage})

}

}

