import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RecommendationService } from './recommendation.service';

describe('RecommendationService', () => {
  let service: RecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetAllRecommend() should exists', () => {
    expect(service.getAllRecommendSong).toBeTruthy();
  });
});
