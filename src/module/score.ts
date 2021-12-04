/*
    ==>分数
    ==>等级
*/
class Score{
    scoreNum:number = 0
    levelNum:number = 1
    maxLevel:number =10
    scoreElement:HTMLElement
    levelElement:HTMLElement
    constructor(){
        this.scoreElement = document.querySelector('.score')
        this.levelElement =document.querySelector('.level')
        this.init()
    }
    init(){
        this.scoreElement.innerText = this.scoreNum+'' //要的是字符串
        this.levelElement.innerText = this.levelNum+''
    }
    addScore(){
        this.scoreElement.innerText = ++this.scoreNum+'' 
        if(this.scoreNum % 10 ==0){
            this.levelUp()
        }
    }
    levelUp(){
        if(this.levelNum<this.maxLevel){
            this.levelElement.innerText = ++this.levelNum+''
        }
    }
}

export default Score