import { TestBed } from '@angular/core/testing';

import { DeleteMessageService } from './delete-message.service';

describe('DeleteMessageService', () => {
  let service: DeleteMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
