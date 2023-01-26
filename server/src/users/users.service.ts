import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) 
    private userModel: Model<UserDocument>,
    ) {}
  async create(createUserDto: CreateUserDto) {
    const { name, successTaps=0 } = createUserDto;

    const createdUser = await this.userModel.create({ name, successTaps });

    return  { id: createdUser.id };
  }

  async findAll() {
    return await this.userModel.find({}).sort({ successTaps: -1 });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { successTaps } = updateUserDto;

    return await this.userModel.updateOne({ _id: id }, { successTaps });
  }
}
