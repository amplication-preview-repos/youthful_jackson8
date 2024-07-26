import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  properties?: PropertyListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
};
