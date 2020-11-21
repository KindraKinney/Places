import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
           id: 'u1',
           name:'Kindra Kinney', 
           image: 'https://unsplash.com/photos/wpU4veNGnHg', 
           places: 3 
        }
    ];
    return <UsersList items={USERS}/>;
};

export default Users;