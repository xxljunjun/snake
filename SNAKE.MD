### 实现 snake 的静态页面布局

### 安装 ts

```
npm install --save typescript ts-loader
```

```js
 module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
```

### 面向对象编程

- 积分等级模块

```js
//分数
//等级
//增加分数的方法
//提高分数的等级
```

- 食物模块

```js
//get食物的X坐标
//get食物的Y坐标
//function:改变分数
//function:改变食物坐标
```

- 小蛇模块

```js
//get蛇头坐标X
//get蛇头坐标Y
//set蛇头坐标X
//set蛇头坐标Y
//function:添加蛇身体
//function:蛇身体跟随蛇头
//function:检查全部的身体是否与蛇头位置相同
```

- 控制器模块

```js
//全局监听keydown事件
//function:蛇移动方法
//function:吃到食物
//function:按键按下
```
