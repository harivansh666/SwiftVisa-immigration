"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formData = void 0;
const formData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phoneNo } = req.body;
    try {
        // res.send("good g");
        res.send(name + " " + email + " " + phoneNo);
    }
    catch (error) {
        console.error("Error processing form data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.formData = formData;
