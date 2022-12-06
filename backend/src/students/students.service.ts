import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return new this.studentModel(createStudentDto).save();
  }

  async findAll() {
    return this.studentModel.find();
  }

  async findOne(id: string) {
    return this.studentModel.findOne({ id });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.updateOne(
      { id },
      { $set: { ...updateStudentDto } },
    );
  }

  async remove(id: string) {
    return this.studentModel.deleteOne({ id });
  }
}
