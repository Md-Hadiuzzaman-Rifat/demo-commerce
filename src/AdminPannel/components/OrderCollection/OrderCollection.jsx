import "./OrderCollection.scss"
import OrderTable from '../../pages/OrderTable/OrderTable';

const MainContent = () => {
    return (
        <div className='mainContent'>
            <h2>Order Page:</h2>
            <OrderTable></OrderTable>
        </div>
    );
};
export default MainContent;