export class Deferred<T> {
  resolve!: (result: T) => void;

  reject!: (error: any) => void;

  promise = new Promise<T>((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });

  whenReady(callback: (value: T) => any) {
    return this.promise.then(callback);
  }
}
