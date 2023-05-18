import { Request, Response } from "express";
import organizationModel from "../models/organization";

class organizationsController {
  /**
   * @param {Request} req this is the request coming from the client
   * @param {Response} res this is the http response given back to the client
   */
  async getorganizations(req: Request, res: Response) {
    try {
      const organizations = await organizationModel.find();
      return res.status(200).json({
        data: organizations,
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
  async getorganization(req: Request, res: Response) {
    try {
      //organization
      const organization = await organizationModel.findOne({
        identifier: req.params.id,
      });
      return res.status(200).json({
        data: organization,
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
