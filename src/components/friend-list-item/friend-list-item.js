import React from "react";
import "./friend-list-item.css";
import avatar from "../../images/avatar.png";

const FriendListItem = ({ friend }) => {
  const friendClass = "p-2" + (friend.checked ? " checked" : "");
  return (
    <div className={friendClass}>
      <img src={avatar} className="avatar" alt="avatar" />
      {`${friend.firstName} ${friend.lastName}`}
    </div>
  );
};

export default FriendListItem;
