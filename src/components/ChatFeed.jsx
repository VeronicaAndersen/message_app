import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={'msg_${index}'} style={'width: 100%'}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={message[lastMessageKey]}/>
                        }
                    </div>
                    <div className='read-receipts' style={{ marginRigt: isMyMessage ? '18px' : '0px', marginLeft: MyMessage ? '0px' : '18px' }}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }
    renderMessages();
    if (!chat) return 'Loading ... '
    return (
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title} </div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ heigth: '100px' }} />
            <div className='message-form-container'>
                <MessageForm {... props} chatId={activeChat}/>
            </div>
        </div>
    )
}
export default ChatFeed;