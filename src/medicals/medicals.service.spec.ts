import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsService } from './medicals.service';

describe('MedicalsService', () => {
  let service: MedicalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalsService],
    }).compile();

    service = module.get<MedicalsService>(MedicalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
