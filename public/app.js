(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppRoutingModule = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _router = require('@angular/router');

var _dashboard = require('./dashboard.component');

var _heroes = require('./heroes.component');

var _heroDetail = require('./hero-detail.component');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, { path: 'dashboard', component: _dashboard.DashboardComponent }, { path: 'detail/:id', component: _heroDetail.HeroDetailComponent }, { path: 'heroes', component: _heroes.HeroesComponent }];

var AppRoutingModule = exports.AppRoutingModule = (_dec = (0, _core.NgModule)({
  imports: [_router.RouterModule.forRoot(routes)],
  exports: [_router.RouterModule]
}), _dec(_class = function AppRoutingModule() {
  _classCallCheck(this, AppRoutingModule);
}) || _class);

},{"./dashboard.component":4,"./hero-detail.component":5,"./heroes.component":8,"@angular/core":"@angular/core","@angular/router":"@angular/router"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
  selector: 'my-app',
  template: '\n  <h1>{{title}}</h1>\n  <nav>\n    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>\n    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ',
  styleUrls: ['app.component.css']
}), _dec(_class = function AppComponent() {
  _classCallCheck(this, AppComponent);

  this.title = 'Tour of Heroes';
}) || _class);

},{"@angular/core":"@angular/core"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

var _forms = require('@angular/forms');

var _app = require('./app.component');

var _dashboard = require('./dashboard.component');

var _heroDetail = require('./hero-detail.component');

var _heroes = require('./heroes.component');

var _hero = require('./hero.service');

var _appRouting = require('./app-routing.module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
  imports: [_platformBrowser.BrowserModule, _forms.FormsModule, _appRouting.AppRoutingModule],
  declarations: [_app.AppComponent, _dashboard.DashboardComponent, _heroDetail.HeroDetailComponent, _heroes.HeroesComponent],
  providers: [_hero.HeroService],
  bootstrap: [_app.AppComponent]
}), _dec(_class = function AppModule() {
  _classCallCheck(this, AppModule);
}) || _class);

},{"./app-routing.module":1,"./app.component":2,"./dashboard.component":4,"./hero-detail.component":5,"./hero.service":7,"./heroes.component":8,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser":"@angular/platform-browser"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _router = require('@angular/router');

var _hero = require('./hero');

var _hero2 = require('./hero.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardComponent = exports.DashboardComponent = (_dec = (0, _core.Component)({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [_hero2.HeroService]
}), _dec(_class = function () {
  function DashboardComponent(heroService) {
    _classCallCheck(this, DashboardComponent);

    this.heroes = [];

    console.log(heroService);
    this.heroService = heroService;
  }

  _createClass(DashboardComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.heroService.getHeroes().then(function (heroes) {
        return _this.heroes = heroes.slice(1, 5);
      });
    }
  }]);

  return DashboardComponent;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_hero2.HeroService], DashboardComponent);

},{"./hero":6,"./hero.service":7,"@angular/core":"@angular/core","@angular/router":"@angular/router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroDetailComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

require('rxjs/add/operator/switchMap');

var _core = require('@angular/core');

var _router = require('@angular/router');

var _common = require('@angular/common');

var _hero = require('./hero');

var _hero2 = require('./hero.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeroDetailComponent = exports.HeroDetailComponent = (_dec = (0, _core.Component)({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
}), _dec(_class = function () {
  function HeroDetailComponent(heroService, route, location) {
    _classCallCheck(this, HeroDetailComponent);

    this.hero = this.hero;

    this.heroService = heroService;
    this.route = route;
    this.location = location;
  }

  _createClass(HeroDetailComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.route.params.switchMap(function (params) {
        return _this.heroService.getHero(+params['id']);
      }).subscribe(function (hero) {
        return _this.hero = hero;
      });
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      this.location.back();
    }
  }]);

  return HeroDetailComponent;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_hero2.HeroService, _router.ActivatedRoute, _common.Location], HeroDetailComponent);

},{"./hero":6,"./hero.service":7,"@angular/common":"@angular/common","@angular/core":"@angular/core","@angular/router":"@angular/router","rxjs/add/operator/switchMap":"rxjs/add/operator/switchMap"}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _hero = require('./hero');

var _mockHeroes = require('./mock-heroes');

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeroService = exports.HeroService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
  function HeroService() {
    _classCallCheck(this, HeroService);
  }

  _createClass(HeroService, [{
    key: 'getHeroes',
    value: function getHeroes() {
      return Promise.resolve(_mockHeroes.HEROES);
    }
  }, {
    key: 'getHeroesSlowly',
    value: function getHeroesSlowly() {
      var _this = this;

      return new Promise(function (resolve) {
        // Simulate server latency with 2 second delay
        setTimeout(function () {
          return resolve(_this.getHeroes());
        }, 2000);
      });
    }
  }, {
    key: 'getHero',
    value: function getHero(id) {
      return this.getHeroes().then(function (heroes) {
        return heroes.find(function (hero) {
          return hero.id === id;
        });
      });
    }
  }]);

  return HeroService;
}()) || _class);

},{"./hero":6,"./mock-heroes":10,"@angular/core":"@angular/core"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _router = require('@angular/router');

var _hero = require('./hero');

var _hero2 = require('./hero.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeroesComponent = exports.HeroesComponent = (_dec = (0, _core.Component)({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [_hero2.HeroService]
}), _dec(_class = function () {

  //constructor(private heroService: HeroService) { } //does not work with babel.js
  function HeroesComponent(router, heroService) {
    _classCallCheck(this, HeroesComponent);

    this.heroes = this.heroes;
    this.selectedHero = this.selectedHero;
    //note this is not type script but it in babel.js
    //console.log(router);
    //console.log(heroService);
    this.heroService = heroService;
    this.router = router;
  }

  _createClass(HeroesComponent, [{
    key: 'getHeroes',
    value: function getHeroes() {
      var _this = this;

      this.heroService.getHeroes().then(function (heroes) {
        return _this.heroes = heroes;
      });
    }
  }, {
    key: 'ngOnInit',
    value: function ngOnInit() {
      this.getHeroes();
    }
  }, {
    key: 'onSelect',
    value: function onSelect(hero) {
      this.selectedHero = hero;
    }
  }, {
    key: 'gotoDetail',
    value: function gotoDetail() {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
  }]);

  return HeroesComponent;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_router.Router, _hero2.HeroService], HeroesComponent);

},{"./hero":6,"./hero.service":7,"@angular/core":"@angular/core","@angular/router":"@angular/router"}],9:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEROES = undefined;

var _hero = require('./hero');

var HEROES = exports.HEROES = [{ id: 11, name: 'Mr. Nice' }, { id: 12, name: 'Narco' }, { id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }, { id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }, { id: 17, name: 'Dynama' }, { id: 18, name: 'Dr IQ' }, { id: 19, name: 'Magma' }, { id: 20, name: 'Tornado' }];

},{"./hero":6}]},{},[9])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC1yb3V0aW5nLm1vZHVsZS5qcyIsInNyY1xcYXBwLmNvbXBvbmVudC5qcyIsInNyY1xcYXBwLm1vZHVsZS5qcyIsInNyY1xcZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNyY1xcaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic3JjXFxoZXJvLmpzIiwic3JjXFxoZXJvLnNlcnZpY2UuanMiLCJzcmNcXGhlcm9lcy5jb21wb25lbnQuanMiLCJzcmNcXGluZGV4LmpzIiwic3JjXFxtb2NrLWhlcm9lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTSxTQUFpQixDQUNyQixFQUFFLE1BQU0sRUFBUixFQUFZLFlBQVksWUFBeEIsRUFBc0MsV0FBVyxNQUFqRCxFQURxQixFQUVyQixFQUFFLE1BQU0sV0FBUixFQUFzQix3Q0FBdEIsRUFGcUIsRUFHckIsRUFBRSxNQUFNLFlBQVIsRUFBc0IsMENBQXRCLEVBSHFCLEVBSXJCLEVBQUUsTUFBTSxRQUFSLEVBQXNCLGtDQUF0QixFQUpxQixDQUF2Qjs7SUFXYSxnQixXQUFBLGdCLFdBSlosb0JBQVM7QUFDUixXQUFTLENBQUUscUJBQWEsT0FBYixDQUFxQixNQUFyQixDQUFGLENBREQ7QUFFUixXQUFTO0FBRkQsQ0FBVCxDOzs7Ozs7Ozs7Ozs7OztBQ2REOzs7O0lBYWEsWSxXQUFBLFksV0FaWixxQkFBVTtBQUNULFlBQVUsUUFERDtBQUVULHdPQUZTO0FBVVQsYUFBVyxDQUFDLG1CQUFEO0FBVkYsQ0FBVixDOzs7T0FhQyxLLEdBQVEsZ0I7Ozs7Ozs7Ozs7Ozs7QUNkVjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztJQWlCYSxTLFdBQUEsUyxXQWZaLG9CQUFTO0FBQ1IsV0FBUyxr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LCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb2VzQ29tcG9uZW50IH0gICAgICBmcm9tICcuL2hlcm9lcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gIGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvZGFzaGJvYXJkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICdkYXNoYm9hcmQnLCAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdkZXRhaWwvOmlkJywgY29tcG9uZW50OiBIZXJvRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnaGVyb2VzJywgICAgIGNvbXBvbmVudDogSGVyb2VzQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpIF0sXHJcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGgxPnt7dGl0bGV9fTwvaDE+XHJcbiAgPG5hdj5cclxuICAgIDxhIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkRhc2hib2FyZDwvYT5cclxuICAgIDxhIHJvdXRlckxpbms9XCIvaGVyb2VzXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkhlcm9lczwvYT5cclxuICA8L25hdj5cclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICB0aXRsZSA9ICdUb3VyIG9mIEhlcm9lcyc7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgICAgICAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9ICBmcm9tICcuL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9lc0NvbXBvbmVudCB9ICAgICAgZnJvbSAnLi9oZXJvZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSAgICAgICAgICBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gICAgIGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBIZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgSGVyb2VzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFsgSGVyb1NlcnZpY2UgXSxcclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbXktZGFzaGJvYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICdkYXNoYm9hcmQuY29tcG9uZW50LmNzcycgXSxcclxuICBwcm92aWRlcnM6IFtIZXJvU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGhlcm9lczogSGVyb1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhoZXJvU2VydmljZSk7XHJcbiAgICAgIHRoaXMuaGVyb1NlcnZpY2UgPSBoZXJvU2VydmljZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKVxyXG4gICAgICAudGhlbihoZXJvZXMgPT4gdGhpcy5oZXJvZXMgPSBoZXJvZXMuc2xpY2UoMSwgNSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSGVybyB9ICAgICAgICAgZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSAgZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbXktaGVyby1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaGVyby1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaGVybzogSGVybztcclxuXHJcbiAgY29uc3RydWN0b3IoaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlLHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgICAgdGhpcy5oZXJvU2VydmljZSA9IGhlcm9TZXJ2aWNlO1xyXG4gICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmhlcm9TZXJ2aWNlLmdldEhlcm8oK3BhcmFtc1snaWQnXSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoaGVybyA9PiB0aGlzLmhlcm8gPSBoZXJvKTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSGVybyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEhFUk9FUyB9IGZyb20gJy4vbW9jay1oZXJvZXMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIZXJvU2VydmljZSB7XHJcbiAgZ2V0SGVyb2VzKCk6IFByb21pc2U8SGVyb1tdPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEhFUk9FUyk7XHJcbiAgfVxyXG5cclxuICBnZXRIZXJvZXNTbG93bHkoKTogUHJvbWlzZTxIZXJvW10+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgLy8gU2ltdWxhdGUgc2VydmVyIGxhdGVuY3kgd2l0aCAyIHNlY29uZCBkZWxheVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGhpcy5nZXRIZXJvZXMoKSksIDIwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZXJvKGlkOiBudW1iZXIpOiBQcm9taXNlPEhlcm8+IHtcclxuICAgIHJldHVybiB0aGlzLmdldEhlcm9lcygpXHJcbiAgICAgICAgICAgICAgIC50aGVuKGhlcm9lcyA9PiBoZXJvZXMuZmluZChoZXJvID0+IGhlcm8uaWQgPT09IGlkKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWhlcm9lcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hlcm9lcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJ2hlcm9lcy5jb21wb25lbnQuY3NzJyBdLFxyXG4gICAgcHJvdmlkZXJzOiBbSGVyb1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGhlcm9lczogSGVyb1tdO1xyXG4gIHNlbGVjdGVkSGVybzogSGVybztcclxuXHJcbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkgeyB9IC8vZG9lcyBub3Qgd29yayB3aXRoIGJhYmVsLmpzXHJcbiAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7Ly9ub3RlIHRoaXMgaXMgbm90IHR5cGUgc2NyaXB0IGJ1dCBpdCBpbiBiYWJlbC5qc1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaGVyb1NlcnZpY2UpO1xyXG4gICAgICB0aGlzLmhlcm9TZXJ2aWNlID0gaGVyb1NlcnZpY2U7XHJcbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVyb2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKS50aGVuKGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0SGVyb2VzKCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChoZXJvOiBIZXJvKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSGVybyA9IGhlcm87XHJcbiAgfVxyXG5cclxuICBnb3RvRGV0YWlsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZEhlcm8uaWRdKTtcclxuICB9XHJcbn1cclxuIiwiLy9tYWluIGVudHJ5XHJcblxyXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7XHJcblxyXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcbiIsImltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhFUk9FUzogSGVyb1tdID0gW1xyXG4gIHtpZDogMTEsIG5hbWU6ICdNci4gTmljZSd9LFxyXG4gIHtpZDogMTIsIG5hbWU6ICdOYXJjbyd9LFxyXG4gIHtpZDogMTMsIG5hbWU6ICdCb21iYXN0byd9LFxyXG4gIHtpZDogMTQsIG5hbWU6ICdDZWxlcml0YXMnfSxcclxuICB7aWQ6IDE1LCBuYW1lOiAnTWFnbmV0YSd9LFxyXG4gIHtpZDogMTYsIG5hbWU6ICdSdWJiZXJNYW4nfSxcclxuICB7aWQ6IDE3LCBuYW1lOiAnRHluYW1hJ30sXHJcbiAge2lkOiAxOCwgbmFtZTogJ0RyIElRJ30sXHJcbiAge2lkOiAxOSwgbmFtZTogJ01hZ21hJ30sXHJcbiAge2lkOiAyMCwgbmFtZTogJ1Rvcm5hZG8nfVxyXG5dO1xyXG4iXX0=