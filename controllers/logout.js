import { ApiError } from "../apierror.js";
import { asynchandler } from "../asyncHandler.js";

const logout = asynchandler(async(req,res)=>{
    try {
        const cookiesOption = {
            http:true,
            secure:true
           }
        return res.cookie('token','',cookiesOption).status(200).json({
            message:"session out",
            success:true
        })
    } catch (error) {
        throw new ApiError(500,error)
    }
})
export default logout