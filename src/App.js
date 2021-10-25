import logo from './logo.svg';
import './App.css';

function App() {

  const proverbs = ["좌절감으로 배움을 늦추지 마라.", "삶이 있는 한 희망은 있다." , "언제나 현재에 집중할수 있다면 행복할것이다.", "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.", "행복은 습관이다,그것을 몸에 지니라."];

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
