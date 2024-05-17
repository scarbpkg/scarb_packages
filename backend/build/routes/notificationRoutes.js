"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notificationController_1 = require("../controllers/notificationController");
const auth_1 = require("../middleware/auth");
const notificationRouter = express_1.default.Router();
notificationRouter.get("/all-notifications", auth_1.isAutheticated, (0, auth_1.authorizeRoles)("admin"), notificationController_1.getNotifications);
notificationRouter.put("/update-notification/:id", auth_1.isAutheticated, (0, auth_1.authorizeRoles)("admin"), notificationController_1.updateNotificationStatus);
exports.default = notificationRouter;
