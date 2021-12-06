class Snake {
  snakeElement: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.snakeElement = document.querySelector("#snake>div") as HTMLElement;
    this.element = document.getElementById("snake");
    this.bodies = this.element!.getElementsByTagName("div");
  }
  /**
   * @function:获取蛇头的X坐标
   */
  get X() {
    return this.snakeElement.offsetLeft;
  }
  /**
   * @function:获取蛇头的Y坐标
   */
  get Y() {
    return this.snakeElement.offsetTop;
  }
  /**
   * @function:设置蛇头的X坐标
   */
  set X(value) {
    if (this.X === value) {
      return;
    }
    //蛇在框框内移动，X值在0到290之间
    if (value < 0 || value > 290) {
      throw new Error("游戏结束了！");
    }
    //判断掉头问题，第二节身体和第一节身体
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLLIElement).offsetLeft === value
    ) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    this.bodies[1] && this.movebody();
    this.snakeElement.style.left = value + "px";
    //蛇身体自身的碰撞
    this.checkheadbody();
  }
  /**
   * @function:设置蛇头的Y坐标
   */
  set Y(value) {
    if (this.Y === value) {
      return;
    }
    //蛇在框框内移动，Y值在0到290之间
    if (value < 0 || value > 290) {
      throw new Error("游戏结束了！");
    }
    //判断掉头问题，第二节身体和第一节身体
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLLIElement).offsetTop === value
    ) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.bodies[1] && this.movebody();
    this.snakeElement.style.top = value + "px";
    //蛇身体自身的碰撞
    this.checkheadbody();
  }
  /**
   * @function:添加身体的方法
   */
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  /**
   * @function:添加身体的方法（后面的身体去到前一个位置，以此类推）
   */
  movebody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLLIElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLLIElement).offsetTop;
      (this.bodies[i] as HTMLLIElement).style.left = X + "px";
      (this.bodies[i] as HTMLLIElement).style.top = Y + "px";
    }
  }
  /**
   * @function:检查全部的身体是否与蛇头位置相同
   */
  checkheadbody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLLIElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error("撞身体了！");
      }
    }
  }
}

export default Snake;
