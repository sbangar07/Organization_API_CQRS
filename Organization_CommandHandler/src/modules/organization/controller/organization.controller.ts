import { Request, Response } from "express";
import organizationModel from "../models/organization";
import OrganizationCommandHandler from "../command/organization.command";
import { createorganizationValidator } from "../validator/organization.validator";
import { createorganizationDTO } from "../interfaces/organization.types";

class organizationsController {
  /**
   * @param {Request} req this is the request coming from the client
   * @param {Response} res this is the http response given back to the client
   */
  async createorganization(req: Request, res: Response) {
    try {
      const payload: createorganizationDTO = req.body;
      createorganizationValidator(payload);
      await OrganizationCommandHandler.createorganization(payload);
      res.status(200).json({
        message: "organization successfully added",
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        error: error?.message,
      });
    }
  }

  /**
   * @param {Request} req this is the request coming from the client
   * @param {Response} res this is the http response given back to the client
   */
  async createOrUpdateOrganization(req: Request, res: Response) {
    try {
      const payload: createorganizationDTO = req.body;
      createorganizationValidator(payload);
      await OrganizationCommandHandler.createOrUpdateOrganization(payload);
      res.status(200).json({
        message: "organization successfully added/updated",
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        error: error?.message,
      });
    }
  }
  /**
   * @param {Request} req this is the request coming from the client
   * @param {Response} res this is the http response given back to the client
   */
  async deleteorganization(req: Request, res: Response) {
    try {
      await OrganizationCommandHandler.deleteorganization(req.params.id);
      res.status(200).json({
        message: "organization successfully removed",
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        error: error?.message,
      });
    }
  }
}

export default new organizationsController();
