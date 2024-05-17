"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageAnalytics = exports.getUserAnalytics = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const user_model_1 = __importDefault(require("../models/user.model"));
const packages_model_1 = __importDefault(require("../models/packages.model"));
const analyticsGenerator_1 = require("../utils/analyticsGenerator");
//User analytics -- admmin only
exports.getUserAnalytics = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const users = await (0, analyticsGenerator_1.generateLast12MonthsData)(user_model_1.default);
        res.status(200).json({
            success: true,
            users,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
//Couses analytics -- admmin only
exports.getPackageAnalytics = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const packages = await (0, analyticsGenerator_1.generateLast12MonthsData)(packages_model_1.default);
        res.status(200).json({
            success: true,
            packages,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
