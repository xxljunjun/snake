class Food {
  foodelement: HTMLElement;
  X: number;
  Y: number;
  constructor() {
    this.foodelement = document.getElementsByClassName(
      "food"
    )[0] as HTMLElement;
    // console.log(this.foodelement);
    this.X = this.foodelement.offsetLeft;
    this.Y = this.foodelement.offsetTop;
  }
  foodLocation() {
    //0==>290之间的整数10
    this.foodelement.style.left = Math.floor(Math.random() * 300) + "px";
    this.foodelement.style.top = Math.floor(Math.random() * 300) + "px";
    this.X = this.foodelement.offsetLeft;
    this.Y = this.foodelement.offsetTop;
  }
}
export default Food;
