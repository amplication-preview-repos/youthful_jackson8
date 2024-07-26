import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";
import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  properties?: PropertyUpdateManyWithoutAgentsInput;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
};
