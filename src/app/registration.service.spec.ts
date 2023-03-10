import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('LoginVerification() should exists', () => {
    expect(service.loginVerification).toBeTruthy();
  });
  it('RegisterUserFromRemote() should exists', () => {
    expect(service.registerUserFromRemote).toBeTruthy();
  });
});
