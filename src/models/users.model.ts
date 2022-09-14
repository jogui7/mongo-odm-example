import { model, Schema } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  createdAt: Date;
}

const usersSchema = new Schema<IUser>({
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = model<IUser>('User', usersSchema);