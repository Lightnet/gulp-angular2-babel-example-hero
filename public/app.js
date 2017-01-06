(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = undefined;

var _dec, _class; //setup app

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

var _forms = require('@angular/forms');

require('rxjs/add/operator/map');

var _heroes = require('./heroes.component');

var _heroDetail = require('./hero-detail.component');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule, _forms.FormsModule
    //routing,
    ],
    declarations: [_heroes.HeroesComponent, _heroDetail.HeroDetailComponent],
    bootstrap: [_heroes.HeroesComponent]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./hero-detail.component":2,"./heroes.component":5,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser":"@angular/platform-browser","rxjs/add/operator/map":"rxjs/add/operator/map"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroDetailComponent = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _core = require('@angular/core');

var _hero = require('./hero');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var HeroDetailComponent = exports.HeroDetailComponent = (_dec = (0, _core.Component)({
  selector: 'my-hero-detail',
  template: '\n    <div *ngIf="hero">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]="hero.name" placeholder="name"/>\n      </div>\n    </div>\n  '
}), _dec2 = (0, _core.Input)(), _dec(_class = (_class2 = function HeroDetailComponent() {
  _classCallCheck(this, HeroDetailComponent);

  _initDefineProp(this, 'hero', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'hero', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.hero;
  }
})), _class2)) || _class);

},{"./hero":3,"@angular/core":"@angular/core"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hero = exports.Hero = function Hero() {
  _classCallCheck(this, Hero);

  this.id = this.id;
  this.name = this.name;
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _hero = require('./hero');

var _mockHeroes = require('./mock-heroes');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeroService = exports.HeroService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
  function HeroService() {
    _classCallCheck(this, HeroService);
  }

  _createClass(HeroService, [{
    key: 'getHeroes',
    value: function getHeroes() {
      return _mockHeroes.HEROES;
    }
  }]);

  return HeroService;
}()) || _class);

},{"./hero":3,"./mock-heroes":7,"@angular/core":"@angular/core"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _hero = require('./hero');

var _hero2 = require('./hero.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeroesComponent = exports.HeroesComponent = (_dec = (0, _core.Component)({
  selector: 'my-heroes',
  template: '\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class="heroes">\n      <li *ngFor="let hero of heroes"\n        [class.selected]="hero === selectedHero"\n        (click)="onSelect(hero)">\n        <span class="badge">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]="selectedHero"></my-hero-detail>\n  ',
  styles: ['\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  '],
  providers: [_hero2.HeroService]
}), _dec(_class = function () {

  //constructor(private heroService: HeroService) { } //does not work with babel.js
  function HeroesComponent(heroService) {
    _classCallCheck(this, HeroesComponent);

    this.title = 'Tour of Heroes';
    this.heroes = this.heroes;
    this.selectedHero = this.selectedHero;
    //note this is not type script but it in babel.js
    //console.log(heroService);
    this.heroService = heroService;
  }

  _createClass(HeroesComponent, [{
    key: 'getHeroes',
    value: function getHeroes() {
      //console.log(this.heroService);
      //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      this.heroes = this.heroService.getHeroes();
    }
  }, {
    key: 'ngOnInit',
    value: function ngOnInit() {
      //console.log("heros?");
      this.getHeroes();
    }
  }, {
    key: 'onSelect',
    value: function onSelect(hero) {
      this.selectedHero = hero;
    }
  }]);

  return HeroesComponent;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_hero2.HeroService], HeroesComponent);

},{"./hero":3,"./hero.service":4,"@angular/core":"@angular/core"}],6:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _HeroesComponent = require('./HeroesComponent');

//main entry

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_HeroesComponent.AppModule);

/*
//does not work with https://angular.io/docs/ts/latest/quickstart.html that it reqire shim. Since it typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
*/

},{"./HeroesComponent":1,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEROES = undefined;

var _hero = require('./hero');

var HEROES = exports.HEROES = [{ id: 11, name: 'Mr. Nice' }, { id: 12, name: 'Narco' }, { id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }, { id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }, { id: 17, name: 'Dynama' }, { id: 18, name: 'Dr IQ' }, { id: 19, name: 'Magma' }, { id: 20, name: 'Tornado' }];

},{"./hero":3}]},{},[6])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXEhlcm9lc0NvbXBvbmVudC5qcyIsInNyY1xcaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic3JjXFxoZXJvLmpzIiwic3JjXFxoZXJvLnNlcnZpY2UuanMiLCJzcmNcXGhlcm9lcy5jb21wb25lbnQuanMiLCJzcmNcXGluZGV4LmpzIiwic3JjXFxtb2NrLWhlcm9lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7a0JDQUE7O0FBR0E7O0FBRUE7OztBQUhBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7O0lBY2EsUyxXQUFBLFMsV0FaWixvQkFBUztBQUNOLGFBQVM7QUFHTDtBQUhLLEtBREg7QUFNTixrQkFBYywwREFOUjtBQVVOLGVBQVc7QUFWTCxDQUFULEM7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZWEsbUIsV0FBQSxtQixXQWJaLHFCQUFVO0FBQ1QsWUFBVSxnQkFERDtBQUVUO0FBRlMsQ0FBVixDLFVBY0Usa0I7Ozs7Ozs7Z0JBQ0QsSTs7Ozs7Ozs7Ozs7OztJQ25CVyxJLFdBQUEsSTs7O09BQ1gsRSxRQUFBLEU7T0FDQSxJLFFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7O0FDRkY7O0FBRUE7O0FBQ0E7Ozs7SUFHYSxXLFdBQUEsVyxXQURaLHVCOzs7Ozs7O2dDQUdxQjtBQUNsQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWSDs7QUFFQTs7QUFDQTs7OztJQW1FYSxlLFdBQUEsZSxXQWpFWixxQkFBVTtBQUNULFlBQVUsV0FERDtBQUVULDBXQUZTO0FBY1QsVUFBUSx3aUNBZEM7QUErRFQsYUFBVztBQS9ERixDQUFWLEM7O0FBc0VDO0FBQ0EsMkJBQVksV0FBWixFQUFzQztBQUFBOztBQUFBLFNBTHRDLEtBS3NDLEdBTDlCLGdCQUs4QjtBQUFBLFNBSnRDLE1BSXNDLFFBSnRDLE1BSXNDO0FBQUEsU0FIdEMsWUFHc0MsUUFIdEMsWUFHc0M7QUFBQztBQUNuQztBQUNBLFNBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNIOzs7O2dDQUVpQjtBQUNkO0FBQ0E7QUFDQSxXQUFLLE1BQUwsR0FBYyxLQUFLLFdBQUwsQ0FBaUIsU0FBakIsRUFBZDtBQUNIOzs7K0JBRWdCO0FBQ2I7QUFDQSxXQUFLLFNBQUw7QUFDSDs7OzZCQUVRLEksRUFBa0I7QUFDekIsV0FBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0Q7Ozs7O2tFQXhCVSxlOzs7OztBQ3BFYjs7QUFDQTs7QUFFQTs7QUFFQTs7QUFQQTs7QUFTQSxzREFBeUIsZUFBekI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFTyxJQUFNLDBCQUFpQixDQUM1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sVUFBZixFQUQ0QixFQUU1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sT0FBZixFQUY0QixFQUc1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sVUFBZixFQUg0QixFQUk1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sV0FBZixFQUo0QixFQUs1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sU0FBZixFQUw0QixFQU01QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sV0FBZixFQU40QixFQU81QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sUUFBZixFQVA0QixFQVE1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sT0FBZixFQVI0QixFQVM1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sT0FBZixFQVQ0QixFQVU1QixFQUFDLElBQUksRUFBTCxFQUFTLE1BQU0sU0FBZixFQVY0QixDQUF2QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL3NldHVwIGFwcFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5pbXBvcnQgeyBIZXJvZXNDb21wb25lbnQgfSAgZnJvbSAnLi9oZXJvZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZVxyXG4gICAgICAgIC8vcm91dGluZyxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIZXJvZXNDb21wb25lbnQsXHJcbiAgICAgICAgSGVyb0RldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0hlcm9lc0NvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktaGVyby1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaGVyb1wiPlxyXG4gICAgICA8aDI+e3toZXJvLm5hbWV9fSBkZXRhaWxzITwvaDI+XHJcbiAgICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7aGVyby5pZH19PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsPm5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiaGVyby5uYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9EZXRhaWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVybzogSGVybztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSGVybyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEhFUk9FUyB9IGZyb20gJy4vbW9jay1oZXJvZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGVyb1NlcnZpY2Uge1xyXG5cclxuICBnZXRIZXJvZXMoKTogSGVyb1tdIHtcclxuICAgIHJldHVybiBIRVJPRVM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWhlcm9lcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT57e3RpdGxlfX08L2gxPlxyXG4gICAgPGgyPk15IEhlcm9lczwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJoZXJvZXNcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBoZXJvIG9mIGhlcm9lc1wiXHJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImhlcm8gPT09IHNlbGVjdGVkSGVyb1wiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGhlcm8pXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7aGVyby5pZH19PC9zcGFuPiB7e2hlcm8ubmFtZX19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPG15LWhlcm8tZGV0YWlsIFtoZXJvXT1cInNlbGVjdGVkSGVyb1wiPjwvbXktaGVyby1kZXRhaWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMge1xyXG4gICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogMTVlbTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICAgIGhlaWdodDogMS42ZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgbGk6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgbGVmdDogLjFlbTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgLnRleHQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTNweDtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgLmJhZGdlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogLTFweDtcclxuICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIHByb3ZpZGVyczogW0hlcm9TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0aXRsZSA9ICdUb3VyIG9mIEhlcm9lcyc7XHJcbiAgaGVyb2VzOiBIZXJvW107XHJcbiAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xyXG5cclxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH0gLy9kb2VzIG5vdCB3b3JrIHdpdGggYmFiZWwuanNcclxuICBjb25zdHJ1Y3RvcihoZXJvU2VydmljZTogSGVyb1NlcnZpY2UpIHsvL25vdGUgdGhpcyBpcyBub3QgdHlwZSBzY3JpcHQgYnV0IGl0IGluIGJhYmVsLmpzXHJcbiAgICAgIC8vY29uc29sZS5sb2coaGVyb1NlcnZpY2UpO1xyXG4gICAgICB0aGlzLmhlcm9TZXJ2aWNlID0gaGVyb1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBnZXRIZXJvZXMoKTogdm9pZCB7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5oZXJvU2VydmljZSk7XHJcbiAgICAgIC8vdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKS50aGVuKGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyk7XHJcbiAgICAgIHRoaXMuaGVyb2VzID0gdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiaGVyb3M/XCIpO1xyXG4gICAgICB0aGlzLmdldEhlcm9lcygpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoaGVybzogSGVybyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEhlcm8gPSBoZXJvO1xyXG4gIH1cclxufVxyXG4iLCIvL21haW4gZW50cnlcclxuXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9IZXJvZXNDb21wb25lbnQnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cclxuLypcclxuLy9kb2VzIG5vdCB3b3JrIHdpdGggaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L3F1aWNrc3RhcnQuaHRtbCB0aGF0IGl0IHJlcWlyZSBzaGltLiBTaW5jZSBpdCB0eXBlc2NyaXB0XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgPGgxPkhlbGxvIHt7bmFtZX19PC9oMT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBuYW1lID0gJ0FuZ3VsYXInOyB9XHJcbiovXHJcbiIsImltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhFUk9FUzogSGVyb1tdID0gW1xyXG4gIHtpZDogMTEsIG5hbWU6ICdNci4gTmljZSd9LFxyXG4gIHtpZDogMTIsIG5hbWU6ICdOYXJjbyd9LFxyXG4gIHtpZDogMTMsIG5hbWU6ICdCb21iYXN0byd9LFxyXG4gIHtpZDogMTQsIG5hbWU6ICdDZWxlcml0YXMnfSxcclxuICB7aWQ6IDE1LCBuYW1lOiAnTWFnbmV0YSd9LFxyXG4gIHtpZDogMTYsIG5hbWU6ICdSdWJiZXJNYW4nfSxcclxuICB7aWQ6IDE3LCBuYW1lOiAnRHluYW1hJ30sXHJcbiAge2lkOiAxOCwgbmFtZTogJ0RyIElRJ30sXHJcbiAge2lkOiAxOSwgbmFtZTogJ01hZ21hJ30sXHJcbiAge2lkOiAyMCwgbmFtZTogJ1Rvcm5hZG8nfVxyXG5dO1xyXG4iXX0=