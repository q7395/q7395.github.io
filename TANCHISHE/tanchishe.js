//点击开始游戏——>startpage消失——>游戏开始
//随机出现食物，出现三节蛇开始运动
// 上下左右——>改变方向运动
// 判断是否吃到食物——>食物消失，蛇加一
// 判断游戏结束，弹出框


var startP = document.getElementById('startP');
var startPage = document.getElementById('startPage');
var lose = document.getElementById('lose');
var scoreBox = document.getElementById('score');
var content = document.getElementById('content');
var startPage = document.getElementById('startPage');
var startBtn = document.getElementById('startBtn');

var snakeMove;//计时器
var speed = 200;//200毫秒
var close = document.getElementById('close')
var loserScore = document.getElementById('loserScore');


var startGameBool = true;
var startPaushBool = true;
var startBtn = document.getElementById('startBtn');

init();

//初始化游戏
function init() {
  //地图
  this.mapW = parseInt(getComputedStyle(content).width);
  this.mapH = parseInt(getComputedStyle(content).height);
  this.mapDiv = content;
  //食物
  this.foodW = 20;
  this.foodH = 20;
  this.foodX = 0;
  this.foodY = 0;
  //蛇
  this.snakeW = 20;
  this.snakeH = 20;
  this.snakeBody = [[4, 3, 'head'], [3, 3, 'body'], [2, 3, 'body']];
  //游戏属性
  this.direct = 'right';
  this.left = false;
  this.right = false;
  this.up = true;
  this.down = true;

  this.score = 0;


  bindEvent();


}
//开始游戏
function startGame() {
  startPage.style.display = 'none';
  startP.style.display = 'block';
  food();
  snake();
}
//食物对象
function food() {
  var food = document.createElement('div');
  food.style.width = this.foodW + 'px';
  food.style.height = this.foodH + 'px';
  food.style.position = 'absolute';
  this.foodX = Math.floor(Math.random() * (this.mapW / 20));
  this.foodY = Math.floor(Math.random() * (this.mapH / 20));
  food.style.left = this.foodX * 20 + 'px';
  food.style.top = this.foodY * 20 + 'px';
  this.mapDiv.appendChild(food).setAttribute('class', 'food');
}
//蛇对象
function snake() {
  // 遍历蛇数组
  for (var i = 0; i < this.snakeBody.length; i++) {

    var snake = document.createElement('div');
    snake.style.width = this.snakeW + 'px';
    snake.style.height = this.snakeH + 'px';
    snake.style.position = 'absolute';
    snake.style.left = this.snakeBody[i][0] * 20 + 'px';
    snake.style.top = this.snakeBody[i][1] * 20 + 'px';
    snake.classList.add(this.snakeBody[i][2]);
    this.mapDiv.appendChild(snake).classList.add('snake');
    // 判断蛇的朝向，并对应相应的蛇头图片朝向
    switch (this.direct) {
      case 'right':
        break;
      case 'up':
        snake.style.transform = 'rotate(270deg)';
        break;
      case 'left':
        snake.style.transform = 'rotate(180deg)';
        break;
      case 'down':
        snake.style.transform = 'rotate(90deg)';
        break;
      default:
        break;
    }
  }
}
// 移动
function move() {

  for (var i = snakeBody.length - 1; i > 0; i--) {
    this.snakeBody[i][0] = this.snakeBody[i - 1][0];
    this.snakeBody[i][1] = this.snakeBody[i - 1][1];
  }
  switch (this.direct) {
    case 'right':
      this.snakeBody[0][0] += 1;
      break;
    case 'up':
      this.snakeBody[0][1] -= 1;
      break;
    case 'left':
      this.snakeBody[0][0] -= 1;
      break;
    case 'down':
      this.snakeBody[0][1] += 1;
      break;
    default:
      break;
  }

  // 移动一步 移除原先的蛇，创建新蛇
  removeClass('snake');
  snake();

  // 吃到食物，蛇身加一，分数加一，并移除食物，创建新的食物
  if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
    var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
    var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
    switch (this.direct) {
      case 'right':
        this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body']);
        break;
      case 'up':
        this.snakeBody.push([snakeEndX, snakeEndY - 1, 'body']);
        break;
      case 'left':
        this.snakeBody.push([snakeEndX - 1, snakeEndY, 'body']);
        break;
      case 'down':
        this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body']);
        break;
      default:
        break;
    }



    this.score += 1;
    scoreBox.innerHTML = this.score;
    removeClass('food');
    food();
  }

  // 蛇身撞墙结束游戏
  if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {
    relodGame();
  } else if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
    relodGame();
  }
  // 蛇身撞蛇身，结束游戏
  var snakeHX = this.snakeBody[0][0];
  var snakeHY = this.snakeBody[0][1];
  for (var i = 1; i < this.snakeBody.length; i++) {
    if (snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
      relodGame();
    }
  }
}
// 结束游戏并重新开始
function relodGame() {
  removeClass('snake');
  removeClass('food');
  clearInterval(snakeMove);//清除计时器
  //重置游戏属性
  this.snakeBody = [[4, 3, 'head'], [3, 3, 'body'], [2, 3, 'body']];

  this.direct = 'right';
  this.left = false;
  this.right = false;
  this.up = true;
  this.down = true;
  // 结束游戏弹出分数
  lose.style.display = 'block';
  loserScore.innerHTML = this.score;
  // 分数重置
  this.score = 0;
  scoreBox.innerHTML = this.score;
  // 重置开始游戏bool值
  startGameBool = true;
  startPaushBool = true;

  startP.setAttribute('src', './img/start.png');
}
// 移除对应的html标签
function removeClass(className) {
  var ele = document.getElementsByClassName(className);
  while (ele.length > 0) {
    ele[0].parentNode.removeChild(ele[0]);
  }
}
// 接受键盘上下左右，并蛇对应的朝向
function setDerict(code) {
  switch (code) {
    case 37:
      if (this.left) {
        this.direct = 'left';
        this.left = false;
        this.right = false;
        this.up = true;
        this.down = true;
      }
      break;
    case 38:
      if (this.up) {
        this.direct = 'up';
        this.left = true;
        this.right = true;
        this.up = false;
        this.down = false;
      }
      break;
    case 39:
      if (this.right) {
        this.direct = 'right';
        this.left = false;
        this.right = false;
        this.up = true;
        this.down = true;
      }
      break;
    case 40:
      if (this.down) {
        this.direct = 'down';
        this.left = true;
        this.right = true;
        this.up = false;
        this.down = false;
      }
      break;
    default:
      break;
  }
}
// 获取事件
function bindEvent() {

  // 关闭按钮事件
  close.onclick = function () {
    lose.style.display = 'none';
  }
  // 开始按钮事件
  startBtn.onclick = function () {
    startAndPaush();
  }
  // 开始&暂停按钮事件
  startP.onclick = function () {
    startAndPaush();
  }
}
// 开始&暂停
function startAndPaush() {
  if (startPaushBool) {
    // 开始
    if (startGameBool) {
      startGame();
      startGameBool = false;
    }

    startP.setAttribute('src', './img/pause.png');
    // 接收键盘事件
    document.onkeydown = function (e) {
      var code = e.keyCode;
      setDerict(code);
    }
    // 蛇移动
    snakeMove = setInterval(function () {
      move();
    }, speed);
    // 可以暂停游戏
    startPaushBool = false;
  } else {
    // 暂停
    startP.setAttribute('src', './img/start.png');
    // 清除计时器
    clearInterval(snakeMove);
    // 不接收键盘事件
    document.onkeydown = function (e) {
      e.returnValue = false;
      return false;
    };
    // 可以开始游戏
    startPaushBool = true;
  }
}
