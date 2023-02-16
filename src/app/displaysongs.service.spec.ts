import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DisplaysongsService } from './displaysongs.service';

describe('DisplaysongsService', () => {
  
  let service: DisplaysongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DisplaysongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('AddMusic() should exists', () => {
    expect(service.addMusicOneByOne).toBeTruthy();
  });

  it('getAllMusics() should exists', () => {
    expect(service.getAllMusics).toBeTruthy();
  });
});
