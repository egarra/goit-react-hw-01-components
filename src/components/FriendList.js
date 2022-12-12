import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import '../css/FriendList.css';

function FriendList ({friends}) {

    return (
        <ul className="friend-list">
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    FriendListItem({avatar, name, isOnline, id})
                )
            })}
        </ul>
    )    
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
  }

export default FriendList;