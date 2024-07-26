import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  ReferenceArrayInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="InterestedProperties"
          source="interestedProperties"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
