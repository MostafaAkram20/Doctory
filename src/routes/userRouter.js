import { Router } from "express";
import auth from "../middleware/auth.js";
import * as user_servies from "../controllers/userController.js"
import { use } from "react";
const router = Router()




router.get("/profile" ,auth,user_servies.get_profile )
router.patch("/profile" ,auth ,  user_servies.update_profile)
router.delete("/profile" , auth , user_servies.delet_profile)





export default router 