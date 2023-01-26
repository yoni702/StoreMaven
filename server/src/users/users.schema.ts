import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type UserDocument = User & Document;

@Schema()
class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    successTaps: number;
}

const UserSchema = SchemaFactory.createForClass(User);


export { User, UserDocument, UserSchema };