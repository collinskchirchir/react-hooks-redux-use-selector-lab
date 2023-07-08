import React from "react";
import { useSelector } from "react-redux";


function Users() {
  const users = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length)
  return (
    <div>
      Total Users: {userCount}
      <ul>
        {users.map((user, index) => {
          return(
            <li key={index}>{user.username} - {user.hometown}</li>
            )
        })}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
