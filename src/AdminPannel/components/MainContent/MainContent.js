import React from 'react';
import "./MainContent.scss"
import Box from '../Box/Box';
import OrderTable from '../../pages/OrderTable/OrderTable';

const MainContent = () => {
    return (
        <div className='mainContent'>
            {/* <Box></Box> */}
            <h2>Order Page:</h2>
            <OrderTable></OrderTable>
        </div>
    );
};

export default MainContent;