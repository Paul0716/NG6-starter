
export const Service = (settings) => {
  return (Svc) => {
    settings = settings || {};
    Svc.$inject = settings.inject || [];
    return Svc;
  };
};
