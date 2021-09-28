import React, { useContext, useEffect, useState } from 'react';
import { usersContext } from '../../stores/users';
import { getDisplayName } from '../../utils';
import Button from '../Button';
import Input from '../Input';
import styles from './styles.module.scss';

const UserCard = ({ user }) => {
  const [editUser, setEditUser] = useState(user);
  const [isEditMode, setIsEditMode] = useState(false);
  const [, dispatch] = useContext(usersContext);
  const handleClick = (e) => {
    isEditMode ? setIsEditMode(false) : setIsEditMode(true);
  };
  useEffect(() => {
    setEditUser(user);
  }, [user]);

  if (isEditMode) {
    return (
      <div className={styles.card}>
        <Input
          onChange={(value) => setEditUser({ ...editUser, first_name: value })}
          label="First name"
          value={editUser.first_name}
        />
        <Input
          onChange={(value) => setEditUser({ ...editUser, last_name: value })}
          label="Last name"
          value={editUser.last_name}
        />
        <Input
          onChange={(value) => setEditUser({ ...editUser, title: value })}
          label="Title"
          value={editUser.title}
        />
        <Input
          onChange={(value) => setEditUser({ ...editUser, company: value })}
          label="Company"
          value={editUser.company}
        />
        <Button handleClick={handleClick}>Save</Button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <img src={editUser.photo} />
      <h1>{getDisplayName(editUser)}</h1>
      {user.title && <p className={styles.title}>{editUser.title}</p>}
      {user.company && <p className={styles.company}>{editUser.company}</p>}
      <Button handleClick={handleClick}>Edit</Button>
    </div>
  );
};

export default UserCard;
