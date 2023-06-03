import React from 'react';
import LayoutDefaultNoNavigation from '../layouts/default/defaultNoNavigation';
import UserLoginInterface from '../sections/userLoginInterface/userLoginInterface';


function UserLoginPage() {
    return (
      <LayoutDefaultNoNavigation>
        <UserLoginInterface/>
      </LayoutDefaultNoNavigation>
    );
}

export default UserLoginPage;