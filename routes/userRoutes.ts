// import express from "express";
// import {
//   activateUser,
//   deleteUser,
//   getAllUsers,
//   getUserInfo,
//   loginUser,
//   logoutUser,
//   registerUser,
//   socialAuth,
//   updateUserPassword,
//   updateImage,
//   updateUserInfo,
//   updateUserRole,
// } from "../controllers/userController";
// import { authorizeRoles, isAutheticated } from "../middleware/auth";
// const userRouter = express.Router();

// userRouter.post("/registration", registerUser);

// userRouter.post("/activate-user", activateUser);

// userRouter.post("/login", loginUser);

// userRouter.get("/logout", isAutheticated, logoutUser);

// userRouter.get("/me", isAutheticated, getUserInfo);

// userRouter.post("/social-auth", socialAuth);

// userRouter.put("/update-user-info", isAutheticated, updateUserInfo);

// userRouter.put("/update-user-password", isAutheticated, updateUserPassword);

// userRouter.put("/update-user-avatar", isAutheticated, updateImage);

// userRouter.get(
//   "/get-users",
//   isAutheticated,
//   authorizeRoles("admin"),
//   getAllUsers
// );

// userRouter.put(
//   "/update-user",
//   isAutheticated,
//   authorizeRoles("admin"),
//   updateUserRole
// );

// userRouter.delete(
//   "/delete-user/:id",
//   isAutheticated,
//   authorizeRoles("admin"),
//   deleteUser
// );

// export default userRouter;
