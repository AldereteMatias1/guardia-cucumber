import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsController } from './medicals.controller';
import { MedicalsService } from './medicals.service';

describe('MedicalsController', () => {
  let controller: MedicalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalsController],
      providers: [MedicalsService],
    }).compile();

    controller = module.get<MedicalsController>(MedicalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
