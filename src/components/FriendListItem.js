import PropTypes from 'prop-types';
import '../css/FriendListItem.css';

function FriendListItem ({avatar, name, isOnline, id}) {
    if (isOnline) {
        return (
            <li className="friends__item" key={id}>
                <span className="status" style = {{
                    background: "green",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%"
                }}></span>
                <img className="friends__avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        )
    }

    return (
        <li className="friends__item" key={id}>
            <span className="status" style = {{
                background: "red",
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