/*
  两个bug
    ===>蛇掉头问题
    ===>蛇触碰自己身体，游戏结束
*/
class Snake {
  snakeElement: HTMLElement; //蛇头
  bodies:HTMLCollection
  element:HTMLElement
  constructor() {
    this.snakeElement = document.querySelector(
      "#snake>div"
    ) as HTMLElement;
    this.element = document.getElementById('snake')
    this.bodies = this.element!.getElementsByTagName('div')
  }
  get X(){
    return this.snakeElement.offsetLeft
  }
  get Y(){
    return this.snakeElement.offsetTop
  }
  set X(value){
    if(this.X === value){
      return
    }
    //X值在0到290之间
    // console.log(value)
    if(value<0 ||value>290){
      throw new Error('游戏结束了！')
    }
    //判断掉头问题，第二节身体和第一节身体
    if(this.bodies[1] && (this.bodies[1] as HTMLLIElement).offsetLeft ===value){
      // console.log('掉头了',value)
      if(value>this.X){
        value = this.X-10
        // console.log("1111",value)
      }else{
        value = this.X+10
        // console.log("2222222",value)
      }
    }
    this.bodies[1] && this.movebody()
    this.snakeElement.style.left = value+'px'
    this.checkheadbody()
  }
  set Y(value){
    if(this.Y === value){
      return
    }
    // console.log(value)
    if(value<0 ||value>290){
      throw new Error('游戏结束了！')
    }
    //判断掉头问题，第二节身体和第一节身体
    if(this.bodies[1] && (this.bodies[1] as HTMLLIElement).offsetTop ===value){
      // console.log('掉头了',value)
      if(value>this.Y){
        value = this.Y-10
        // console.log(value)
      }else{
        value = this.Y+10
        // console.log(value)
      }
    }
    this.bodies[1] && this.movebody()
    this.snakeElement.style.top = value+'px'
    this.checkheadbody()
    // console.log("蛇头",this.snakeElement.style.top)
  }
  addBody(){
    //添加身体的方法
    this.element.insertAdjacentHTML('beforeend','<div></div>')
  }
  movebody(){
    //后面的身体去到前一个位置
    // console.log(this.bodies.length)
    // let newbodies = []
    // for(let val in this.bodies){
    //   if (this.bodies.hasOwnProperty(val)) {
    //     newbodies.unshift(this.bodies[val])
    //   }
    // }
    // console.log('获取身体的新数组',newbodies)
    // newbodies.forEach(element=>{
    //   let X = element.offsetLeft
    //   let Y = element.offsetTop

    //   this.X
    //   this.Y

    // })
    for(let i=this.bodies.length-1;i >0;i--){
     
      let X = (this.bodies[i-1] as HTMLLIElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLLIElement).offsetTop;
      (this.bodies[i] as HTMLLIElement).style.left = X+'px';
      (this.bodies[i] as HTMLLIElement).style.top = Y+'px';
    }
  }
  checkheadbody(){
    //检查全部的身体是否与蛇头位置相同
    for(let i =1;i<this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLLIElement
      if(this.X ===bd.offsetLeft && this.Y ===bd.offsetTop ){
        throw new Error("撞身体了！")
        // console.log("撞身体了！")
      }
    }
  }
}

export default Snake;
