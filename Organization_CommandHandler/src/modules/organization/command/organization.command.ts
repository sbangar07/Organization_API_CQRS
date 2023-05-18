import { v4 as uuid } from "uuid";
import eventHandler from "../../app/eventHandler";
import organizationModel from "../models/organization";
import { createorganizationDTO } from "../interfaces/organization.types";
import { string } from "joi";

class OrganizationCommandHandler {
  private generateUserId() {
    return uuid();
  }

  async createorganization(payload: createorganizationDTO) {
    const {
      identifier,
      active,
      type,
      name,
      alias,
      telecom,
      address,
      partOf,
      contact,
    } = payload;
    // double check from databasequery
    const organization = await organizationModel.findOne({ identifier }).lean();
    if (organization) throw new Error("Organization already exists");
    const userId = this.generateUserId();
    const organizationData = {
      identifier,
      active,
      type,
      name,
      alias,
      telecom,
      address,
      partOf,
      contact,
      command: "add",
    };

    eventHandler.organizationHandler(organizationData);
  }

  async createOrUpdateOrganization(payload: createorganizationDTO) {
    const {
      identifier,
      active,
      type,
      name,
      alias,
      telecom,
      address,
      partOf,
      contact,
    } = payload;
    // double check from databasequery
    const organization = await organizationModel.findOne({ identifier }).lean();
    let dbCommand = "add";
    if (organization != null) {
      dbCommand = "update";
    }
    const organizationData = {
      identifier,
      active,
      type,
      name,
      alias,
      telecom,
      address,
      partOf,
      contact,
      command: dbCommand,
    };

    eventHandler.organizationHandler(organizationData);
  }

  async deleteorganization(identifier: string) {
    const organization = await organizationModel.findOne({ identifier }).lean();
    if (!organization) throw new Error("Invalid organization provided");
    const organizationData = {
      identifier,
      command: "remove",
    };
    eventHandler.organizationHandler(organizationData);
  }
}

export default new OrganizationCommandHandler();
