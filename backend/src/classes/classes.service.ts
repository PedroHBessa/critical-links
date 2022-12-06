import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class, ClassDocument } from 'src/schemas/class.schema';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Class.name) private classModel: Model<ClassDocument>,
  ) {}
  async create(createClassDto: CreateClassDto) {
    return new this.classModel(createClassDto).save();
  }

  async findAll() {
    return this.classModel.find();
  }

  async findOne(id: string) {
    return this.classModel.findOne({ id });
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    return this.classModel.updateOne(
      { id },
      { $set: { ...updateClassDto } },
    );
  }

  async remove(id: string) {
    return this.classModel.deleteOne({ id });
  }
}
