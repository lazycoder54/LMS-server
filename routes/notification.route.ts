import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNotifications } from "../controllers/notification.controller";
import { updateNotification } from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controllers";
const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);

notificationRoute.put(
    "/update-notification/:id",
    updateAccessToken,
    isAuthenticated,
    authorizeRoles("admin"),
    updateNotification
  );


export default notificationRoute;
