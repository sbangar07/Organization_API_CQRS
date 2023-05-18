import mongoose, { Schema, Document } from "mongoose";
import { Icontact } from "../interfaces/organization.types";
import { boolean, string } from "joi";

export interface IOrganizationDocument extends Document {
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

const OrganizationSchema = new Schema<IOrganizationDocument>({
  identifier: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  alias: {
    type: String,
    required: true,
  },

  telecom: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  partOf: {
    type: String,
    required: true,
  },
  contact: {
    name: {
      type: String,
    },
    telecom: {
      type: String,
    },
  },
});

export default mongoose.model<IOrganizationDocument>(
  "organization",
  OrganizationSchema
);
