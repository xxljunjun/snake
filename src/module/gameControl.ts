/*
  核心类，控制其他类
*/
import Score from "./score";
import Food from "./food";
import Snake from "./snake";
class GameControl {
  score: Score;
  food: Food;
  snake: Snake;
  direction: string = ""; //记录当前方向
  isLive: Boolean = true; //控制游戏开始关闭
  constructor() {
    this.score = new Score();
    this.food = new Food();
    this.snake = new Snake();
    this.init();
  }
  /**
   * @function:初始化
   */
  init() {
    window.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  /**
   * @function:方向键按下之后记录方向
   */
  keydownHandler(e) {
    //e.key的值是否合法
    this.direction = e.key;
  }
  /**
   * @function:蛇移动方法
   */
  run() {
    this.eatFood();
    try {
      let X = this.snake.X;
      let Y = this.snake.Y;
      switch (this.direction) {
        case "ArrowUp":
          Y -= 10;
          break;
        case "ArrowDown":
          Y += 10;
          break;
        case "ArrowLeft":
          X -= 10;
          break;
        case "ArrowRight":
          X += 10;
          break;
      }
      this.snake.X = X;
      this.snake.Y = Y;
      //作为函数传入，this指向
      this.isLive &&
        setTimeout(this.run.bind(this), 300 - (this.score.levelNum - 1) * 30);
    } catch {
      alert("游戏结束了！");
      this.isLive = false;
    }
  }
  /**
   * @function:是否迟到了食物
   */
  eatFood() {
    if (this.food.X == this.snake.X && this.food.Y == this.snake.Y) {
      console.log("吃到食物了");
      this.food.change();
      this.score.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
