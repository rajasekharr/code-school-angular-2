"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Shedule";
        this.races = [{
                "id": 1,
                "name": "Daytona Thunderdome",
                "date": new Date('2512-01-04T14:00:00'),
                "about": "Race through the ruins of an ancient Florida battle arena.",
                "entryFee": 3200,
                "isRacing": false
            }, {
                "id": 2,
                "name": "San Francisco Ruins",
                "date": new Date('2512-07-03T20:00:00'),
                "about": "Drift down the streets of a city almost sunk under the ocean.",
                "entryFee": 4700,
                "isRacing": true
            }, {
                "id": 3,
                "name": "New York City Skyline",
                "date": new Date('2512-07-12T21:00:00'),
                "about": "Fly between buildings in the electronic sky.",
                "entryFee": 4300,
                "isRacing": true
            }];
    }
    /* Método para poder realizar a soma total dos preços das corridas somente  */
    AppComponent.prototype.totalCost = function () {
        var sum = 0;
        for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
            var race = _a[_i];
            if (race.isRacing)
                sum += race.entryFee;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'racing-app',
            template: "<h1>{{heading}}</h1>\n    <ul>\n        <li *ngFor=\"let race of races\">\n            <h2>{{race.name}} {{race.entryFee | currency: 'USD' :true}}</h2>\n            <p>{{race.date | date: 'MMM d, y, h:mm a'}}</p>\n            <p>{{race.about}}</p>\n            <button *ngIf=\"race.isRacing == false\">Enter Race</button>\n            <h3 *ngIf=\"race.isRacing == true\">Already Race</h3>\n        </li>\n    </ul>\n    <h2>Total Cost: {{totalCost() | currency : 'USD' :true}}</h2>\n "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map