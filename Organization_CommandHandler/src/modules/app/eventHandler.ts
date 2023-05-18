import organizationEventHandler from "../organization/events/organization.events";
import { IOrganizationCommand } from "../organization/interfaces/organization.types";

const organizationEvent = new organizationEventHandler();

class EventHandler {
  async organizationHandler(record: IOrganizationCommand) {
    try {
      await organizationEvent.processorganization(record);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new EventHandler();
