/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpaceshipsService } from './spaceships.service';

describe('Service: Spaceships', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceshipsService]
    });
  });

  it('should ...', inject([SpaceshipsService], (service: SpaceshipsService) => {
    expect(service).toBeTruthy();
  }));
});
