/*
  属性和方法
    ==>获取食物的坐标X，Y的方法
    ==>食物改变位置的方法
*/
class Food {
  foodelement: HTMLElement;
  constructor() {
    this.foodelement = document.getElementsByClassName(
      "food"
    )[0] as HTMLElement;
  }
  get X(){
    return this.foodelement.offsetLeft;
  }
  get Y(){
    return this.foodelement.offsetTop;
  }
  change() {
    //0==>290之间的整数10
    this.foodelement.style.left = Math.floor(Math.random() * 30) *10+ "px";
    this.foodelement.style.top = Math.floor(Math.random() * 30) *10 + "px";
  }
}
export default Food;
