import PropTypes from "prop-types"
import "./Userlist.css"

const UserListCard = ({image, username}) => {
  return (
    <>
    <div className="card">
     <div className="gitImage">
         <img src={image} alt={username}/>
     </div>
     <div>
        <h2 className="gitName">{username}</h2>
     </div>
    </div>
    </>
  )
}

UserListCard.propTypes = {
    image: PropTypes.string,
    username: PropTypes.string
}

export default UserListCard;