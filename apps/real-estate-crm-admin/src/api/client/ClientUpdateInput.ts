import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  interestedProperties?: Array<"Option1">;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
