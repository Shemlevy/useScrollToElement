export class Deferred<T> {
  resolve!: (result: T) => void;
  reject!: (error: any) => void;
  promise = new Promise<T>((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
}
//generates random id;
export const getId = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return `${s4()}-${s4()}-${s4()}`;
};
