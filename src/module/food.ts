class Food {
  foodelement: HTMLElement;
  X: number;
  Y: number;
  constructor() {
    // this.foodelement = document.getElementsByClassName("food");
    this.X = this.foodelement.offsetLeft;
    this.Y = this.foodelement.offsetTop;
  }
}
export default Food;
