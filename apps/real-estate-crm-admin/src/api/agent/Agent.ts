import { Property } from "../property/Property";
import { Appointment } from "../appointment/Appointment";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  properties?: Array<Property>;
  appointments?: Array<Appointment>;
  name: string | null;
  email: string | null;
  phone: string | null;
};
