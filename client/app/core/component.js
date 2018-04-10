
export const Component = (settings) => {
  return (comp) => {
    const template = settings.template;
    comp.$inject = settings.inject;
    return {
      template,
      controller: comp,
      controllerAs: settings.controllerAs || '$ctrl',
      bindings: settings.bindings || {},
    };
  };
};
