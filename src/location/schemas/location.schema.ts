import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Location>;

@Schema()
export class Location {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  devices: string;

  @Prop({ required: true })
  status: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
