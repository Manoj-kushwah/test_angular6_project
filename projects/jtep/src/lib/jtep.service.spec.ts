import { TestBed, inject } from '@angular/core/testing';

import { JtepService } from './jtep.service';

describe('JtepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JtepService]
    });
  });

  it('should be created', inject([JtepService], (service: JtepService) => {
    expect(service).toBeTruthy();
  }));
});
