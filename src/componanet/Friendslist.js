import Friend from "./Friend";

function Friendslist({ friends, selectfriend, Onselect }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectfriend={selectfriend}
          Onselect={Onselect}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

export default Friendslist;
