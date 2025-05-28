import { Router } from "express";
import { formData } from "../controller/formData.contr";
const formDatarouter = Router();

formDatarouter.post("/apply", formData);
export default formDatarouter;
