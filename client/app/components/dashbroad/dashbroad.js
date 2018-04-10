import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashbroadComponent from './dashbroad.component';
import { DashbroadSvc } from './dashbroad.service';

let dashbroadModule = angular.module('dashbroad', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('dashbroad', {
      url: '/dashbroad',
      component: 'dashbroad'
    });
})

.component('dashbroad', dashbroadComponent)

.service('dashbroadSvc', DashbroadSvc)

.name;

export default dashbroadModule;
