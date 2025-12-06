import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../user.types';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, message: 'First name is required' })
  fname: string;

  @Prop()
  lname: string;

  @Prop({ required: true, message: 'Email is required', unique: true })
  email: string;

  @Prop({ required: true, message: 'Password is required' })
  password: string;
  @Prop({ default: Role.STUDENT })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
