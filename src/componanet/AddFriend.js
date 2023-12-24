import { useState } from "react";
import Button from "./Button";

function AddFriend({ OnAddfriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleAddfriends = function (e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const addfriend = {
      name,
      image,
      balance: 0,
      id,
    };
    OnAddfriend(addfriend);
    setName("");
  };
  return (
    <form className="form-add-friend" onSubmit={handleAddfriends}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        placeholder="https://i.pravatar.cc/48"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
