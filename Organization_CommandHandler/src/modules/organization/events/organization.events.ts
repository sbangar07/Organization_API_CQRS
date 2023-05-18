import organizationModel from "../models/organization";
import {
  IOrganization,
  IOrganizationCommand,
  IUpdateOrganizationDTO,
} from "../interfaces/organization.types";

enum Commands {
  add = "add",
  remove = "remove",
  update = "update",
}

class organizationEventHandler {
  async processorganization(record: IOrganizationCommand) {
    switch (record.command) {
      case Commands.add:
        await new organizationModel({
          identifier: record.identifier,
          active: record.active,
          type: record.type,
          name: record.name,
          alias: record.alias,
          telecom: record.telecom,
          address: record.address,
          partOf: record.partOf,
          contact: record.contact,
        }).save();
        break;
      case Commands.remove:
        await organizationModel.deleteOne({ identifier: record.identifier });
        break;
      case Commands.update:
        let organizationData = await organizationModel.findOne({
          identifier: record.identifier,
        });
        if (organizationData != null) {
          organizationData.active = record.active || false;
          organizationData.type = record.type || "";
          organizationData.name = record.name || "";
          organizationData.alias = record.alias || "";
          (organizationData.telecom = record.telecom || ""),
            (organizationData.address = record.address || ""),
            (organizationData.partOf = record.partOf || ""),
            (organizationData.contact = record.contact);
          await organizationModel.updateOne({ organizationData });
          await organizationData.save();
        }
        break;
    }
  }
  async updateorganization(
    userId: string,
    organizationData: IUpdateOrganizationDTO
  ) {
    await organizationModel.updateOne(
      {
        userId,
      },
      { ...organizationData }
    );
  }
}

export default organizationEventHandler;
