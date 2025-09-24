import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VitalSignsService } from './vital-signs.service';
import { CreateVitalSignDto } from './dto/create-vital-sign.dto';
import { UpdateVitalSignDto } from './dto/update-vital-sign.dto';

@Controller('vital-signs')
export class VitalSignsController {
  constructor(private readonly vitalSignsService: VitalSignsService) {}

  @Post()
  create(@Body() createVitalSignDto: CreateVitalSignDto) {
    return this.vitalSignsService.create(createVitalSignDto);
  }

  @Get()
  findAll() {
    return this.vitalSignsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vitalSignsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVitalSignDto: UpdateVitalSignDto) {
    return this.vitalSignsService.update(+id, updateVitalSignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vitalSignsService.remove(+id);
  }
}
