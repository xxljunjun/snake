/*
  核心类，控制其他类
      ==>按键事件
      ==>蛇可以移动
*/
import Score from './score'
import Food from "./food";
import Snake from "./snake";
class GameControl {
  score:Score
  food:Food
  snake:Snake
  direction:string = ''
  isLive:Boolean = true
  constructor() {
    this.score = new Score()
    this.food = new Food()
    this.snake = new Snake()
    this.init()
  }
  init() {
    window.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run()
  }
  keydownHandler(e){
    console.log(e.key)
    //e.key的值是否合法
    this.direction = e.key
  }
  run(){
    //检查蛇是否吃到了食物
    this.eatFood()
    try{
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case "ArrowUp":
       Y-= 10;
        break;
      case "ArrowDown":
        Y+= 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }
    this.snake.X = X
    this.snake.Y = Y
    //作为函数传入，this指向
    this.isLive && setTimeout(this.run.bind(this),300-(this.score.levelNum-1)*30)
    }catch{
      alert('游戏结束了！')
      this.isLive = false
    }
    
  }
  eatFood(){
    // this.snake.X
    // this.snake.Y
    // this.food.X
    // this.food.Y
    if(this.food.X == this.snake.X && this.food.Y == this.snake.Y){
      console.log('吃到食物了')
      this.food.change()
      this.score.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl;
