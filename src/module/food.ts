class Food {
  //食物的dom节点
  foodelement: HTMLElement;
  constructor() {
    this.foodelement = document.getElementsByClassName(
      "food"
    )[0] as HTMLElement;
  }
  /**
   * @function:获取食物的X坐标
   */
  get X() {
    return this.foodelement.offsetLeft;
  }
  /**
   * @function:获取食物的Y坐标
   */
  get Y() {
    return this.foodelement.offsetTop;
  }
  /**
   * @function:改变食物坐标
   */
  change() {
    //每次食物坐标改变为0到290之间的整数10
    this.foodelement.style.left = Math.floor(Math.random() * 30) * 10 + "px";
    this.foodelement.style.top = Math.floor(Math.random() * 30) * 10 + "px";
  }
}
export default Food;
