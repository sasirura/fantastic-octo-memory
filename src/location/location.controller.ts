import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { AuthjsGuard } from 'src/authjs/authjs.guard';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  @UseGuards(AuthjsGuard)
  findAll(@Param() params: { limit: number; offset: number }) {
    return this.locationService.findAll(params);
  }

  @Get(':id')
  @UseGuards(AuthjsGuard)
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthjsGuard)
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(id, updateLocationDto);
  }

  @Delete(':id')
  @UseGuards(AuthjsGuard)
  remove(@Param('id') id: string) {
    return this.locationService.remove(id);
  }
}
