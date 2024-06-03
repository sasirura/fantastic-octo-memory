import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './schemas/location.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>,
  ) {}
  async create(CreateLocationDto: CreateLocationDto): Promise<Location> {
    const createLocation = new this.locationModel(CreateLocationDto);
    return createLocation.save();
  }

  async findAll(params: {
    limit: number;
    offset: number;
  }): Promise<Location[]> {
    return this.locationModel
      .find()
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async findOne(id: string): Promise<Location> {
    return this.locationModel.findById(id).exec();
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    return this.locationModel.findByIdAndUpdate(id, updateLocationDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.locationModel.findByIdAndDelete(id);
  }
}
