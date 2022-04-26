const MyMessage = ({message}) => {
    if(message?.attachment?.lenght>0){
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:"right"}}
            />
        )
    }
    return(
        <div className="message" style={{float:"right", marginRight: "18px", color: "white", backgroundColor: "#32dac5"}}>
            {message.text}
        </div>
    )
}
export default MyMessage;