import jwt from 'jsonwebtoken';
import { User } from '../modal/user.modal.js';

const getuserDetailsfromtoken = async (token) => {
    if (!token) {
        return {
            message: "session out",
            logout: true
        };
    }
    
    try {
        // Verify the token
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        // Fetch user details without the password field
        const user = await User.findById(decode.id).select("-password");

        // Check if user exists
        if (!user) {
            return {
                message: "User not found",
                logout: true
            };
        }

        return user;
    } catch (error) {
        console.error("Token verification error:", error);
        return {
            message: "Invalid token",
            logout: true
        };
    }
}

export default getuserDetailsfromtoken;
