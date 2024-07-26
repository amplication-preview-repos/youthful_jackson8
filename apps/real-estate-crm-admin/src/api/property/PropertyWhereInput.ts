import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
};
