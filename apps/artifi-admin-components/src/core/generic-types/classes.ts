export class GenericClass<T> {
  static data;

  static setData<T>(_data: T) {
    GenericClass.data = _data;
  }

  static getData<T>(): T {
    return GenericClass.data;
  }
}
