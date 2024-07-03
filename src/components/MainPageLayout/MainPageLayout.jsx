// import Footer from "../Footer/Footer";
import FacebookChat from "../FacebookChat/FacebookChat";
import Navbar from "../Navbar/Navbar";

// eslint-disable-next-line react/prop-types
const MainPageLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <FacebookChat></FacebookChat>
        </div>
    );
};

export default MainPageLayout;