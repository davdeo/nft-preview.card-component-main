import './style.css';

import React from 'react';

export interface User {
    avatar: string;
    name: string;
}

interface Props {
    user: User;
}

export const UserInformation: React.FunctionComponent<Props> = ({ user }) => {
    return (
        <div className="user-information">
            <img src={user.avatar} alt="" className="avatar-image" />
            <div className="created-by">
                {'Creation of '}
                <a href="#" className="creator">
                    {user.name}
                </a>
            </div>
        </div>
    );
};
