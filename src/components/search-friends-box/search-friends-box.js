import React from "react";
import { searchFriendsInputChange } from "../../actions";
import { connect } from "react-redux";

const SearchFriendsBox = ({ searchFriendsLabel, onLabelChange }) => {
  return (
    <div className="p-2">
      <input
        className="p-1 w-100 form-control"
        value={searchFriendsLabel}
        type="text"
        onChange={event => onLabelChange(event.target.value)}
        placeholder="Search friends"
      />
    </div>
  );
};

const mapStateToProps = ({ searchFriendsLabel }) => {
  return { searchFriendsLabel };
};

const mapDispatchToProps = dispatch => {
  return {
    onLabelChange: symbol => dispatch(searchFriendsInputChange(symbol))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFriendsBox);
