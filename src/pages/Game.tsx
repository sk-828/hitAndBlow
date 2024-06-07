import { count } from 'console';
import './Game.css';
import { useEffect, useMemo, useState, useLayoutEffect } from "react";
import { randomInt } from 'crypto';

const Parent = () => {
  const [text, setText] = useState("");
  // ↑親コンポーネントで使う：textの初期値とtextを更新する関数を宣言
  // ↓子コンポーネントから受け取った値で親コンポーネントのtextを更新する関数A
  const handleValueChange = (newValue : string) => {
    setText(newValue);
  };

  return (
    <div>
      <Child handleValueChange={handleValueChange} />
      {/* textを子コンポーネント側の値で更新するためにpropsで渡す */}
      <h1>{text}</h1>
      {/* ↑textはここに表示 */}
    </div>
  );
};
type ChildProps = {
  handleValueChange: (value: string) => void;
};
const Child = (props : ChildProps) => {
  // 親コンポーネントから受け取った関数を使って、inputの値を渡す
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.handleValueChange(value);
  };

  return (
    <>
      <input
        type="text"
        // フォームが更新されるとhandleInputChangeが呼ばれる
        onChange={handleInputChange}
      />
    </>
  );
};






const classs=["","ball0000ff","ball1e90ff","ball6495ed","ball00bfff","ballee82ee","ballf8f8ff"];

interface GameInputProps {
  num: number;
  handleValueChange: (value: string) => void;
  
}

function GameInput(props:GameInputProps){
  const [selectName, setData] = useState(String);
  useEffect(() => {
    setData("ball0000ff");
  }, []);


  const ballName = `Ball${String(props.num)}`;

  function method(data : string) {
    
    setData(classs[Number(data)]);
    const value = data;
    props.handleValueChange(value);
  }

  return (
    <td className="gametd">
      <select name={ballName} className={selectName} onChange={(e) => method(e.target.value)}>
        <option className={classs[1]} value="1" >●</option>
        <option className={classs[2]} value="2">●</option>
        <option className={classs[3]} value="3">●</option>
        <option className={classs[4]} value="4">●</option>
        <option className={classs[5]} value="5">●</option>
        <option className={classs[6]} value="6">●</option>
      </select>
    </td>
  );
};

interface GameInputsProps {
  handleOnClick: (value: Ball) => void;
}
function GameInputs(props :GameInputsProps){
  const [selectBall, setBall] = useState([1,1,1,1]);
  
  const handleValueChange1 = (newValue : string) => {
    var temp =selectBall;
    temp[0]=parseInt(newValue);
    setBall(temp);

  };

  const handleValueChange2 = (newValue : string) => {
    var temp =selectBall;
    temp[1]=parseInt(newValue);
    setBall(temp);

  };

  const handleValueChange3 = (newValue : string) => {
    var temp =selectBall;
    temp[2]=parseInt(newValue);
    setBall(temp);

  };

  const handleValueChange4 = (newValue : string) => {
    var temp =selectBall;
    temp[3]=parseInt(newValue);
    setBall(temp);

  };

  const handleOnClick = () =>{
    var newball=new Ball;
    newball.color[0]=selectBall[0];
    newball.color[1]=selectBall[1];
    newball.color[2]=selectBall[2];
    newball.color[3]=selectBall[3];
    props.handleOnClick(newball);

  }
  return (
    <tr className="gametr">
      <td className="gametd">入力</td>
      <GameInput num={1} handleValueChange={handleValueChange1}/>
      <GameInput num={2} handleValueChange={handleValueChange2}/>
      <GameInput num={3} handleValueChange={handleValueChange3}/>
      <GameInput num={4} handleValueChange={handleValueChange4}/>
      <td className="gametd"><input className="button is-primary" value="送信" onClick={handleOnClick} /></td>
    </tr>
  );
};

interface ColorProps {
  ball:Ball;
  count:number;
}
function Color(props:ColorProps){
  return(
    <tr className="gametd">
      <td className="gametd">{props.count+1}回目</td>
       <td className="gametd"><span className={classs[props.ball.color[0]]}>●</span></td>
       <td className="gametd"><span className={classs[props.ball.color[1]]}>●</span></td>
       <td className="gametd"><span className={classs[props.ball.color[2]]}>●</span></td>
       <td className="gametd"><span className={classs[props.ball.color[3]]}>●</span></td>
       <td className="gametd"><span >{props.ball.color[4]}</span></td>
       <td className="gametd"><span >{props.ball.color[5]}</span></td>


    </tr>
  );
}

class Ball{
  color:number[];

  constructor() {
    this.color=[0,0,0,0,0,0];
  }
}

class Balls{
  colors:Ball[];
  count:number;
  constructor() {
    this.colors=[new Ball,new Ball,new Ball,new Ball,new Ball,new Ball,new Ball,new Ball,new Ball,new Ball];
    this.count=0;
  }

  setColor(ball:Ball){
    this.colors[this.count]=ball;
    this.count++;
  }
}

class Anser{
  color:number[];

  constructor() {
    this.color=[0,0,0,0];
    for(var i=0;i<this.color.length;i++){
      this.color[i]=parseInt(String(Math.random()*6))+1;
      for(var j=0;j<i;j++){
        if(this.color[i]==this.color[j]){
          i--;
          break;
        }
      }
    }
  }
}

function GameTable() {

  const [balls, setBalls] = useState(new Balls);
  const [ans, setAns] = useState(new Anser);

  const handleOnClick = (newBall: Ball) => {
    console.log(newBall);
    const newBalls = new Balls();
    newBalls.colors = [...balls.colors];
    newBalls.count = balls.count;
		var output = [0, 0 ];
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if (i ===j) {
					if (ans.color[i] === newBall.color[j]) {
						output[0]++;
					}

				} else {
					if (ans.color[i] === newBall.color[j]) {
						output[1]++;
					}
				}
			}
		}
    newBall.color[4]=output[0];
    newBall.color[5]=output[1];
    newBalls.setColor(newBall);
    
    setBalls(newBalls);
  };
  return (
    <table className="gametable">
      <GameInputs handleOnClick={handleOnClick}/>
      <tr className="gametd">
        <th className="gameth"></th>
        <th className="gameth">Ball1</th>
        <th className="gameth">Ball2</th>
        <th className="gameth">Ball3</th>
        <th className="gameth">Ball4</th>
        <th className="gameth">ヒット</th>
        <th className="gameth">ブロー</th>
      </tr>
      <Color ball={balls.colors[0]} count={0}/>
      <Color ball={balls.colors[1]} count={1}/>
      <Color ball={balls.colors[2]} count={2}/>
      <Color ball={balls.colors[3]} count={3}/>
      <Color ball={balls.colors[4]} count={4}/>
      <Color ball={balls.colors[5]} count={5}/>
      <Color ball={balls.colors[6]} count={6}/>
      <Color ball={balls.colors[7]} count={7}/>
      <Color ball={balls.colors[8]} count={8}/>
      <Color ball={balls.colors[9]} count={9}/>


    </table>
  );
}

function Game() {
  return (
    <div className="content">
      <h1 className="game">
        ヒット＆ブロー！
      </h1>
      <p>ヒット＆ブローは隠れた正解のボールの色と位置を当てるゲーム！<br />
        ４つボールの色を左の欄の６つの色から選択して予想しよう！<br />
        色と位置があってるとヒットが、色はあってるけど位置が違う場合はブローの数字が増えるよ！<br />
        １０回までに隠れたボールの色を当てよう！</p>
      <GameTable />

      <form method="post" action="/gameStart">
        <input className="button is-primary" type="submit" value="リセット" />
      </form>
    </div>
  );
}

export default Game;
