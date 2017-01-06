# gulp-angular2-babel-example-hero

Information: To run gulp auto script builds for development testing to run web page with Babel ES6, Angular2 and javascript.

Programs:
 * Atom.io (optional)
  * bottom-dock
  * gulp-manager
 * Nodejs 7.3.0 (Require)
  * Babel.js ES6 (npm package from babelify)
  * gulp (npm package)

Typescript and Babel.js has some different in script code. Few area doesn't work to able to run babel.js ES6 script.

Private and Public var doesn't work right in babel.js.

Gulp run auto script with browserify, babelify and others.

Note this is development build. This is just a bare base to run with Angular2. Or I could be wrong but it should run right. From the packages that run list in packages.json.

To Setup:

```
npm install

npm install -g gulp

npm start
```

It need to install package file from package.json. It will be listed in dependencies that will be add into node_modules to run build and server. The server is very simple with gulp using task with watch changes.

Note the vender.js file is around 7.16 MB (+/-) depend what you include with it. By default files are angular 2 and support files to run javascript.

```
const vendors = [
    'babel-polyfill',
    'zone.js/dist/zone',
    'rxjs/add/observable/of',
    'rxjs/add/observable/throw',
    'rxjs/add/operator/catch',
    'rxjs/add/operator/debounceTime',
    'rxjs/add/operator/distinctUntilChanged',
    'rxjs/add/operator/do',
    'rxjs/add/operator/filter',
    'rxjs/add/operator/map',
    'rxjs/add/operator/switchMap',
    'rxjs/add/operator/toPromise',
    'rxjs/Observable',
    'rxjs/Subject',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/common',
    'angular-in-memory-web-api'
];
```

Credits:
 * https://github.com/shuhei/babel-angular2-app/blob/master/src/index.html
 * http://blog.revathskumar.com/2016/02/browserify-separate-app-and-vendor-bundles.html
