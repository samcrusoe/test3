import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="Name" source="name" />
        <TextInput label="Project Owner" multiline source="owner" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
