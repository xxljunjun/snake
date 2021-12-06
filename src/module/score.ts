class Score {
  scoreNum: number = 0;
  levelNum: number = 1;
  maxLevel: number = 10;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  constructor() {
    this.scoreElement = document.querySelector(".score");
    this.levelElement = document.querySelector(".level");
    this.init();
  }
  /**
   * @function:初始化分数
   */
  init() {
    this.scoreElement.innerText = this.scoreNum + "";
    this.levelElement.innerText = this.levelNum + "";
  }
  /**
   * @function:增加分数
   */
  addScore() {
    this.scoreElement.innerText = ++this.scoreNum + "";
    if (this.scoreNum % 10 == 0) {
      this.levelUp();
    }
  }
  /**
   * @function:等级提升
   */
  levelUp() {
    if (this.levelNum < this.maxLevel) {
      this.levelElement.innerText = ++this.levelNum + "";
    }
  }
}

export default Score;
