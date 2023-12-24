import Button from "./Button";

function Friend({ friend, selectfriend, Onselect }) {
  const isSelected = selectfriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          you owe {friend.name} {friend.balance}€
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      <Button onClick={() => Onselect(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
