import express from "express";
import organizationController from "../organization/controller/organization.controller";

const router = express.Router();

//GET
router.get("/organization", organizationController.getorganizations);
router.get("/organization/:id", organizationController.getorganization);

export default router;
