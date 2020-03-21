export default class Utils {
  static getId(arr) {
    return !arr.length
      ? 0
      : Math.max(...arr.map(obj => obj.id)) + 1;
  }
}
