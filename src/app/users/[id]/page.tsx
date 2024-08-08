import React from 'react';


const UserPage = ({searchParams}: any) => {
    let user = JSON.parse(searchParams.data);
    return (
        <div>
            <h1>{user.username}</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank"
                                            rel="noopener noreferrer">{user.website}</a></p>
            {user.email}
        </div>
    );
};

export default UserPage;