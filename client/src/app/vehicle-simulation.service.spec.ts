import { TestBed } from '@angular/core/testing';

import { VehicleSimulationService } from './vehicle-simulation.service';

describe('VehicleSimulationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleSimulationService = TestBed.get(VehicleSimulationService);
    expect(service).toBeTruthy();
  });
});
