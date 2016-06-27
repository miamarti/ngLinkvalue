# ngLinkvalue
AngularJS link input values

<p>
  <a href="https://gitter.im/miamarti/ngLinkvalue" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/ngLinkvalue-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ngLinkvalue/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
</p>

AngularJS component responsible for linking confirmation inputs.

```
<div class="field" ng-class="{ 'has-error': form.password.$dirty && form.password.$error.required }">
    <label>New Password</label>
    <input 
        type="password" 
        name="password" 
        ng-model="login.model.password" 
        required>
    <span ng-show="form.password.$dirty && form.password.$error.required">
        Password required.
    </span>
</div>

<div class="field" ng-class="{ 'has-error': form.password.$dirty && form.$error.confirmValue }">
    <label>Confirm New Password</label>
    <input 
        type="password" 
        name="passwordConfirm" 
        ng-model="login.model.passwordConfirm" 
        ng-linkvalue="login.model.password" 
        required>
    <span ng-show="form.password.$dirty && form.$error.confirmValue">
        Password must match.
    </span>
</div>
```

## Bower install de dependency
```
$ bower install ngLinkvalue --save
```

## Module AngularJS include
```
angular.module('example', ["ngLinkvalue"]);
```
