import './Profile.css'
import { logout } from "../../Utils/Firebase.js";
import { Link, useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate();

    function handleLogout() {
        logout()
        navigate("/freeplay");
    }

    return (
        <div className="Profile">
          <p>waku waku</p>
          <h3 onClick={handleLogout}>Logout</h3>
        </div>
      );
}

export default Profile