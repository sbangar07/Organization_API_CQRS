import express from "express";
import organizationController from "../organization/controller/organization.controller";

const router = express.Router();

//GET
// router.get("/", organizationController.getorganizations);
// router.get("/organization/:id", organizationController.getorganization);

router.post("/organization", organizationController.createorganization);
router.delete("/organization/:id", organizationController.deleteorganization);
router.put("/organization", organizationController.createOrUpdateOrganization);
// router.post("/organization/:id/take-attendance", organizationController.takeAttendance);

export default router;
