import { registerEnumType } from "@nestjs/graphql";

export enum EnumTaskStatus {
  Pending = "Pending",
  Ongoing = "Ongoing",
  New = "New",
  Done = "Done",
}

registerEnumType(EnumTaskStatus, {
  name: "EnumTaskStatus",
});
