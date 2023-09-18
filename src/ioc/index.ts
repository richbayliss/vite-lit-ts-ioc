const log = (...args: any[]) => console.log('Injector', ...args);

export function Injectable() {
  log('creating decorator');
  return function (constructor: Function) {
    log('constructor:', constructor);
  };
}
