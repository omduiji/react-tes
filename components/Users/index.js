import React, { useContext, useEffect, useState } from 'react';
import { usersContext } from '../../stores/users';
import User from '../User';
import styles from './styles.module.scss';
import Button from '../Button';


const Users = ({ setUser, user: currentUser }) => {
  const [users, dispatch] = useContext(usersContext);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();

      dispatch({
        type: 'setUsers',
        payload: data,
      });
    };

    getUsers();
  }, []);




  if (!users.length) return null;
  console.log(styles.users, 'styles')
  const handleClick = (e) => {
    
  };
  return (
    <div className={styles.users}>
      <Button handleClick={handleClick}>Collapse</Button>
      <ul className={styles.users}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            setUser={setUser}
            active={currentUser?.id === user.id}
          />
        ))}
      </ul>
      
    </div>


  );
};

export default Users;
