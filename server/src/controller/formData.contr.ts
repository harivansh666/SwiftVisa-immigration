import { Request, Response } from "express";

interface formDataRequest {
  name: string;
  email: string;
  phoneNo: string;
}

export const formData = async (req: Request, res: Response) => {
  const { name, email, phoneNo } = req.body;
  try {
    // res.send("good g");
    res.send(name + " " + email + " " + phoneNo);
  } catch (error) {
    console.error("Error processing form data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
