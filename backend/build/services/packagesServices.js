"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfPackagesService = exports.getAllPackagesService = exports.createPackage = void 0;
const packages_model_1 = __importDefault(require("../models/packages.model"));
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
//create a course
exports.createPackage = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    const packaged = await packages_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        packaged,
    });
});
//Get All
const getAllPackagesService = async (res) => {
    const packages = await packages_model_1.default.find().sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        packages,
        length: packages.length
    });
};
exports.getAllPackagesService = getAllPackagesService;
const getNumberOfPackagesService = async (res) => {
    const packages = await packages_model_1.default.find();
    res.status(200).json({
        success: true,
        length: packages.length
    });
};
exports.getNumberOfPackagesService = getNumberOfPackagesService;
