import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(_id: string) {
    return this.userModel.findOne({ _id });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne(
      { _id },
      { $set: { ...updateUserDto } },
    );
  }

  async remove(_id: string) {
    return this.userModel.deleteOne({ _id });
  }
}
