import { useState } from "react";
import Friendslist from "./componanet/Friendslist";
import AddFriend from "./componanet/AddFriend";
import Button from "./componanet/Button";
import Splitform from "./componanet/Splitform";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddform, setAddform] = useState(false);
  const [selectfriend, setSelect] = useState(null);
  const handleAddform = function () {
    setAddform((show) => !show);
  };
  const OnAddfriend = function (friend) {
    setFriends((friends) => [...friends, friend]);
  };

  const Onselect = function (friend) {
    setSelect((cur) => (cur?.id === friend.id ? null : friend));
    setAddform(false);
  };

  const submitSplit = function (value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectfriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelect(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist
          friends={friends}
          selectfriend={selectfriend}
          Onselect={Onselect}
        />
        {showAddform && <AddFriend OnAddfriend={OnAddfriend} />}
        <Button onClick={handleAddform}>
          {showAddform ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectfriend && (
        <Splitform
          submitSplit={submitSplit}
          selectfriend={selectfriend}
          key={selectfriend.id}
        />
      )}
    </div>
  );
}
