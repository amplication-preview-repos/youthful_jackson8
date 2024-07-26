import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  interestedProperties?: Array<"Option1">;
  name: string | null;
  email: string | null;
  phone: string | null;
  appointments?: Array<Appointment>;
};
