import DashbroadModule from './dashbroad';
import DashbroadController from './dashbroad.controller';
import DashbroadComponent from './dashbroad.component';
import DashbroadTemplate from './dashbroad.html';

describe('Dashbroad', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DashbroadModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DashbroadController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DashbroadTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DashbroadComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DashbroadTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DashbroadController);
    });
  });
});
