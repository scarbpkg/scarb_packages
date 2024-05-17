"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const packagesController_1 = require("../controllers/packagesController");
// import { authorizeRoles, isAutheticated } from "../middleware/auth";
const packageRouter = express_1.default.Router();
packageRouter.post("/", packagesController_1.uploadPackage);
packageRouter.get("/search", packagesController_1.searchPackages);
packageRouter.get("/:id", packagesController_1.getSinglePackage);
packageRouter.put("/:id", packagesController_1.editPackage);
packageRouter.get("/", packagesController_1.getAllPackages);
packageRouter.get("/number-of-packages", packagesController_1.getNumberOfPackages);
exports.default = packageRouter;
