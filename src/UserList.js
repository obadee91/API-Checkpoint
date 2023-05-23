import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>List of Users</h2>
      {userList.map((user) => (
        <div key={user.id} className="user-item">
          <h3>{user.name}</h3>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city},{' '}
            {user.address.zipcode}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
