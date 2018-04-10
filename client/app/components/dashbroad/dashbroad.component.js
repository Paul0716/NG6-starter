import { Component } from '../../core/component';



@Component({
  template: require('./dashbroad.html'),
  inject: [
    'dashbroadSvc'
  ],
})
export default class dashbroadComponent {
  constructor() {
    console.log('component constructor');
    this.name = 'dashbroad';
  }

  $onInit() {
    console.log('dashbroad init.');
  }
}
