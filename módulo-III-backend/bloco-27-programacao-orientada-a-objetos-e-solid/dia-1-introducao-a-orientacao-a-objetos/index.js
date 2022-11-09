var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections, connectedTo) {
        this._brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
        this.connectedTo = connectedTo;
    }
    Tv.prototype.turnOn = function () {
        console.log("brand: ".concat(this._brand, " --- size: ").concat(this.size, " --- resolution: ").concat(this.resolution, " --- connections: ").concat(this.connections, " --- connectedTo: ").concat(this.connectedTo));
    };
    Tv.prototype.getConnectedTo = function () {
        return this.connectedTo;
    };
    Tv.prototype.setConnectedTo = function (value) {
        if (this.connections[0] === value)
            this.connectedTo = value;
        else
            console.log('Sorry, connection unavailable!');
    };
    return Tv;
}());
var tv1 = new Tv('Samsung', 60, '4k', ['HDMI', 'Ethernet'], 'Ethernet');
tv1.turnOn();
tv1.setConnectedTo('xablau');
tv1.setConnectedTo('HDMI');
console.log(tv1.getConnectedTo());
