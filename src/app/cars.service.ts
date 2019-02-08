import {Injectable} from '@angular/core';
import {Car, CarPage} from './car';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private restApiUrl = 'http://ec2-34-241-12-63.eu-west-1.compute.amazonaws.com:8080';

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<CarPage> {
    // let key = 'v3avisoqey4Pw1fz';
    // let secret = 'JVeZUr8qUj86xvO3yZyRrXiGwmv2nLC6';
    // let livescoreUrl = `http://livescore-api.com/api-client/fixtures/matches.json?key=${key}&secret=${secret}&league=793`;
    //
    // let baseUrl = 'http://livescore-api.com/api-client/';
    // let scoresEndpoint = 'scores/live.json';
    // let matchesEndpoint = 'fixtures/matches.json';
    // let leagueIDs = '793,794,795,796,797,798,799,800';
    // // let leagueIDs = '793';
    //
    // // http://livescore-api.com/documentation/reference/13/
    // // Mecze
    // let matchesUrl = `${baseUrl}${matchesEndpoint}?key=${key}&secret=${secret}&league=${leagueIDs}`;
    // // Wyniki na zywo
    // let liveScoresUrl = `${baseUrl}${scoresEndpoint}?key=${key}&secret=${secret}&league=${leagueIDs}`;
    //
    // this.httpClient.get(matchesUrl)
    //   .subscribe(value => {
    //     console.log('live score results', value);
    //   });


    return this.httpClient.get<CarPage>(`${this.restApiUrl}/cars`);
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.restApiUrl}/cars/${id}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${this.restApiUrl}/cars`, car);
  }

  delete(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.restApiUrl}/cars/${id}`);
  }
}
