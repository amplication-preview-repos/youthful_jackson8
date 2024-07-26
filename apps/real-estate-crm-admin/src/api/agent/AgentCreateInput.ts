import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";
import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
};
