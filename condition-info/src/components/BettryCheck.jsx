import { useState } from "react";

const BettryCheck = () => {

  const FullBettry = () => <h2>Bettry is Excellent 🥳🥳</h2>
  const HighBettry = () => <h2>Bettry is High 🤔🤔</h2>
  const LowBettry = () => <h2>Bettry is Low 😔😔</h2>
  const DangerBettry = () => <h2>Bettry is Danger 😡😡</h2>

  const BettryHealth = ({ level }) => {
    if (level >= 80) return <FullBettry />
    if (level >= 60) return <HighBettry />
    if (level >= 40) return <LowBettry />
    if (level >= 20) return <DangerBettry />
    return <h2>Bettry is Critical 😱😱</h2>
  }

  const [level, setLevel] = useState("");

  const handleChannge = (e) => {
    let value = parseInt(e.target.value);
    setLevel(value);
  }
  return (
    <>
      <h1>Bettry health Check</h1>
      <h2>Bettry level : {level || "0%"}</h2>
      <form action="">
        <input type="number" name="level" placeholder="Please Enter Bettry" onChange={handleChannge} value={level}  />
      </form>

      {level !== '' && <BettryHealth level={level} />}
    </>
  )
}

export default BettryCheck;