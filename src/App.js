import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="432c44a4-0730-473c-9dea-bcb933c32e20"
            userName="Nemo"
            userSecret="Nemo1337"
            renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps}/>}
        />
    )
}
export default App;