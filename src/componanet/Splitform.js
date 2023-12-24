import { useState } from "react";
import Button from "./Button";

function Splitform({ selectfriend, submitSplit }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const friendExpense = bill ? bill - expense : "";
  const [paying, setPaying] = useState("You");
  const handleSplit = function (e) {
    e.preventDefault();
    if (!bill || !expense) return;
    submitSplit(paying === "You" ? expense : -expense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>SPLIT A BILL WITH {selectfriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectfriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>🤑 Who is paying the bill</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value={"You"}>You</option>
        <option value={"Friend"}>Friend</option>
      </select>
      <Button>split bill</Button>
    </form>
  );
}

export default Splitform;
