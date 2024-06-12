import User from "../models/user.model";
import { getUser } from "./redis.util";

export const verifyEmail = async(req,res) => {
    const text = await getUser();
    const data = await User.create(JSON.parse(text));
    return data;
}