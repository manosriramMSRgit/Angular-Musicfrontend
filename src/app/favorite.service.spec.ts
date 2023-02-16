import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('DeleteFavoriteSong() should exists', () => {
    expect(service.deleteFavoritesById).toBeTruthy();
  });


  it('GetFavoriteSong() should exists', () => {
    expect(service.getFavoritesByUserId).toBeTruthy();
  });
  
  it('RecommendSong() should exists', () => {
    expect(service.recommendSongById).toBeTruthy();
  });
  

});
