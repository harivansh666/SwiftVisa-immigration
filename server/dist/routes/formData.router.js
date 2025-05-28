"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formData_contr_1 = require("../controller/formData.contr");
const formDatarouter = (0, express_1.Router)();
formDatarouter.post("/apply", formData_contr_1.formData);
exports.default = formDatarouter;
