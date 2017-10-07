module.exports = DriverClass => {
  return class extends DriverClass {
    constructor() {
      super();
      ['given', 'when', 'result'].forEach((key) => {
        Object.keys(this[key] || {}).forEach((methodName) => {
          const method = this[key][methodName];
          this[key][methodName] = (...args) => {
            method(...args);
            return this;
          };
        });
      });
    }
  }
};