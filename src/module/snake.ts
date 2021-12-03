class Snake {
  X: number;
  Y: number;
  speed: number = 10;
  snakeElement: HTMLElement;
  constructor() {
    this.snakeElement = document.getElementsByClassName(
      "head"
    )[0] as HTMLElement;
    this.X = this.snakeElement.offsetLeft;
    this.Y = this.snakeElement.offsetTop;
    this.init();
  }
  init() {
    window.addEventListener("keydown", this.snakeMove.bind(this));
  }
  snakeMove(e: any) {
    this.snakeElement = document.getElementsByClassName(
      "head"
    )[0] as HTMLElement;
    this.X = this.snakeElement.offsetLeft;
    this.Y = this.snakeElement.offsetTop;

    //keydown, keypress, keyup
    //ArrowUp
    //ArrowDown
    //ArrowLeft
    //ArrowRight
    switch (e.key) {
      case "ArrowUp":
        this.Y -= 10;
        break;
      case "ArrowDown":
        this.Y += 10;
        break;
      case "ArrowLeft":
        this.X -= 10;
        break;
      case "ArrowRight":
        this.X += 10;
        break;
    }
    console.log(this.snakeElement);
    this.snakeElement.style.left = this.X + "PX";
    this.snakeElement.style.top = this.Y + "px";
    // setInterval(this.snakeMove, 30 * this.speed);
  }
}

export default Snake;
