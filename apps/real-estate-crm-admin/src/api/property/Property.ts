import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  status?: "Option1" | null;
  address: string | null;
  description: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
};
