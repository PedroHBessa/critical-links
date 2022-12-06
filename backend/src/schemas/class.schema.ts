import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export type ClassDocument = Class & Document;

@Schema()
export class Class{
    @Prop()
    name: string

    @Prop()
    year: string
}

export const ClassSchema = SchemaFactory.createForClass(Class)