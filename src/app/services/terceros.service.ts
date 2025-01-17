import { Injectable } from '@angular/core';
import { RequestManager } from '../core/managers/requestManager';

@Injectable({
  providedIn: 'root',
})
export class TercerosService {
  constructor(private requestManager: RequestManager) {
    this.requestManager.setPath('TERCEROS_SERVICE');
  }
  get(endpoint: any): any {
    this.requestManager.setPath('TERCEROS_SERVICE');
    return this.requestManager.get(endpoint);
  }
}
