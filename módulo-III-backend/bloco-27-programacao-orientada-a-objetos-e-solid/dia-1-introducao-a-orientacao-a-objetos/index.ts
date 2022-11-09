class Tv {
  private _brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[], connectedTo: string) {
    this._brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = connectedTo;
  }

  turnOn() {
    console.log(`brand: ${this._brand} --- size: ${this.size} --- resolution: ${this.resolution} --- connections: ${this.connections} --- connectedTo: ${this.connectedTo}`);
  }
  getConnectedTo() {
    return this.connectedTo;
  }

  setConnectedTo(value: string) {
    if (this.connections[0] === value) this.connectedTo = value;
    else console.log('Sorry, connection unavailable!');
  }
}

const tv1 = new Tv('Samsung', 60, '4k', ['HDMI', 'Ethernet'], 'Ethernet');

tv1.turnOn();

tv1.setConnectedTo('xablau');
tv1.setConnectedTo('HDMI');

console.log(tv1.getConnectedTo());