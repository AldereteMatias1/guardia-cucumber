import { Controller } from '@nestjs/common';
import { MedicalsService } from './medicals.service';

@Controller('medicals')
export class MedicalsController {
  constructor(private readonly medicalsService: MedicalsService) {}
}
