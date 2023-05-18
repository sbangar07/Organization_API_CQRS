export interface IOrganization {
  identifier: string;
  active?: boolean;
  type?: string;
  name?: string;
  alias?: string;
  telecom?: string;
  address?: string;
  partOf?: string;
  contact?: Icontact;
}

export interface createorganizationDTO {
  identifier: string;
  active: boolean;
  type: string;
  name: string;
  alias: string;
  telecom: string;
  address: string;
  partOf: string;
  contact: Icontact;
}

export interface IUpdateOrganizationDTO {
  identifier: string;
  active: boolean;
  type: string;
  name: string;
  alias: string;
  telecom: string;
  address: string;
  partOf: string;
  contact?: Icontact;
}

export interface Icontact {
  name: string;
  telecom: number;
}

export interface IOrganizationCommand extends IOrganization {
  command: string;
}

export interface IAttendanceCommand {
  userId: string;
  arrivalTime?: string;
}
