export class Deferred {
  promise = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
}
