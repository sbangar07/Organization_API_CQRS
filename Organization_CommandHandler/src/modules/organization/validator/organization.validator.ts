import Joi from "joi";
import { createorganizationDTO } from "../interfaces/organization.types";

export const createorganizationValidator = (
  requestData: createorganizationDTO
): void => {
  const schema = Joi.object().keys({
    identifier: Joi.string().required(),
    active: Joi.bool().required(),
    type: Joi.string().required(),
    name: Joi.string().required(),
    alias: Joi.string().required(),
    telecom: Joi.string().required(),
    address: Joi.string().required(),
    partOf: Joi.string().required(),
    contact: Joi.required(),
  });
  const isValidateResult: Joi.ValidationResult = schema.validate(requestData);
  if (isValidateResult?.error) {
    throw new Error(`${isValidateResult.error?.message}`);
  }
};
