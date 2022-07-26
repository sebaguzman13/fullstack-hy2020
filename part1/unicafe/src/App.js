import { useState } from "react";

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({goodCount, neutralCount, badCount}) => {
  const total = goodCount + neutralCount + badCount;
  const getAverage = () => (goodCount - badCount) / total;
  const getPositivePercentage = () => goodCount * 100 / total;

  if (total === 0) {
    return (
      <>
        <Header text={"statistics"} />
        <br />
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <Header text={"statistics"} />
      <br />   
      <table>
        <tbody>
          <StatisticLine text={"good"} value={goodCount} />
          <StatisticLine text={"neutral"} value={neutralCount} />
          <StatisticLine text={"bad"} value={badCount} />
          <StatisticLine text={"all"} value={total} />
          <StatisticLine text={"average"} value={getAverage()} />
          <StatisticLine text={"positive"} value={getPositivePercentage() + " %"} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const increaseGood = () => setGoodCount(goodCount + 1);
  const increaseNeutral = () => setNeutralCount(neutralCount + 1);
  const increaseBad = () => setBadCount(badCount + 1);

  return (
    <div>
      <Header text={"give feedback"} />
      <br />
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNeutral} text={"neutral"} />
      <Button onClick={increaseBad} text={"bad"} />

      <br />
      <Statistics goodCount={goodCount} neutralCount={neutralCount} badCount={badCount}/>
    </div>
  )
}

export default App;