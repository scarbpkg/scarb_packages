import express from "express";
import {
  editPackage,
  getSinglePackage,
  getAllPackages,
//   getPackageByPublisher, //TODO
  searchPackages,
  uploadPackage,
} from "../controllers/packagesController";
// import { authorizeRoles, isAutheticated } from "../middleware/auth";

const packageRouter = express.Router();

packageRouter.post(
  "/",
  uploadPackage
);

packageRouter.get("/search", searchPackages);


packageRouter.get(
    "/:id",
    getSinglePackage
  );

packageRouter.put(
  "/:id",
  editPackage
);


packageRouter.get("/", getAllPackages);


export default packageRouter;