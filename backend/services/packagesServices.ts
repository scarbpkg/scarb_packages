import { NextFunction, Request, Response } from "express";
import packageModel, { IPackage } from "../models/packages.model";
import { catchAsyncError } from "../middleware/catchAsyncErrors";

//create a course
export const createPackage = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const packaged = await packageModel.create(req.body);
    res.status(201).json({
      success: true,
      packaged,
    });
  }
);

//Get All
export const getAllPackagesService = async (res: Response) => {
  const packages = await packageModel.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    packages,
  });
};
