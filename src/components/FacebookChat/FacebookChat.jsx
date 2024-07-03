
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookChat = () => {
    return (
        <FacebookProvider appId="1010436331081945" chatSupport>
         <CustomChat pageId="292736671144659" minimized={true}/>
       </FacebookProvider> 
    );
};

export default FacebookChat;