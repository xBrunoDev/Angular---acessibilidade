import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe('UniqueId.Service.TsService', () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
