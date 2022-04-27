import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

import ChatFeed from './components/ChatFeed';
const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="432c44a4-0730-473c-9dea-bcb933c32e20"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps}/>}
        />
    )
}
export default App;