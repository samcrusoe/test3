import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/base/User";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Project } from "../../project/base/Project";
import { EnumTaskStatus } from "./EnumTaskStatus";
@ObjectType()
class Task {
  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  assignedTo?: User | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimationDays!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Project,
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  project?: Project | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate!: Date | null;

  @ApiProperty({
    required: true,
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @Field(() => EnumTaskStatus, {
    nullable: true,
  })
  status?: "Pending" | "Ongoing" | "New" | "Done";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Task };
