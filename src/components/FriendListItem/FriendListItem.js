import PropTypes from 'prop-types';
import './FriendListItem.css';

function FriendListItem ({avatar, name, isOnline, id}) {
    const color = isOnline ? "green": "red";

        return (
            <li className="friends__item" key={id}>
                <span className="status" style = {{
                    background: color,
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%"
                }}></span>
                <img className="friends__avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool
  }

export default FriendListItem;