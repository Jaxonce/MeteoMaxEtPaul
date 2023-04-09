export default class City {
    private _name: string;
    private _latitude: number;
    private _longitude: number;
    private _pays: string;
  
    constructor(name: string, latitude: number, longitude: number, pays: string) {
      this._name = name;
      this._latitude = latitude;
      this._longitude = longitude;
      this._pays = pays;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get latitude(): number {
      return this._latitude;
    }
  
    set latitude(value: number) {
      this._latitude = value;
    }
  
    get longitude(): number {
      return this._longitude;
    }
  
    set longitude(value: number) {
      this._longitude = value;
    }
  
    get pays(): string {
      return this._pays;
    }
  
    set pays(value: string) {
      this._pays = value;
    }
  }