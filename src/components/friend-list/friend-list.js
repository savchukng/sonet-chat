import React, { Component } from "react";
import withSonetService from "../hoc/with-sonet-service";
import { connect } from "react-redux";
import { fetchFriends, toggleCheckFriend } from "../../actions";
import Spinner from "../spinner/spinner";
import FriendListItem from "../friend-list-item/friend-list-item";
import "./friend-list.css";

class FriendList extends Component {
  componentDidMount() {
    const { fetchFriends } = this.props;
    fetchFriends();
  }

  render() {
    const {
      friends,
      loadingFriends,
      onFriendCheck,
      searchFriendsLabel
    } = this.props;

    if (loadingFriends) {
      return <Spinner />;
    }

    const searchedFriends = friends.filter(friend => {
      const fullName = friend.firstName + " " + friend.lastName;
      return (
        fullName.toLowerCase().indexOf(searchFriendsLabel.toLowerCase()) > -1
      );
    });

    return (
      <ul className="p-2 friends">
        {searchedFriends.map(friend => {
          return (
            <li
              key={friend.id}
              className="friend"
              onClick={() => onFriendCheck(friend)}
            >
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ friends, loadingFriends, searchFriendsLabel }) => {
  return {
    friends,
    loadingFriends,
    searchFriendsLabel
  };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchFriends: fetchFriends(sonetService, dispatch),
    onFriendCheck: friend => dispatch(toggleCheckFriend(friend))
  };
};

export default withSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FriendList)
);
