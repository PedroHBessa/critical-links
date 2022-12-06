import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export type StudentDocument = Student & Document;

@Schema()
export class Student{
    @Prop()
    first_name: string

    @Prop()
    last_name: string

    @Prop()
    email: string

    @Prop()
    student_id: string

    @Prop()
    class_name: string
}

export const StudentSchema = SchemaFactory.createForClass(Student)