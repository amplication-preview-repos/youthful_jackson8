import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "./ClientTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="InterestedProperties" source="interestedProperties" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Phone" source="phone" />
        <ReferenceManyField
          reference="Appointment"
          target="clientId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Date" source="date" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Agent" source="agent.id" reference="Agent">
              <TextField source={AGENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
