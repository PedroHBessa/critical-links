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

  async findOne(id: string) {
    return this.userModel.findOne({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne(
      { id },
      { $set: { ...updateUserDto } },
    );
  }

  async remove(id: string) {
    return this.userModel.deleteOne({ id });
  }
}
