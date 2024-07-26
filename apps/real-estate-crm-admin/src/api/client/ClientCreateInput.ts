import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  interestedProperties?: Array<"Option1">;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
