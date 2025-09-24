import { Controller } from '@nestjs/common';
import { NursesService } from './nurses.service';

@Controller('nurses')
export class NursesController {
  constructor(private readonly nursesService: NursesService) {}
}
