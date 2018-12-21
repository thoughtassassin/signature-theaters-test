import React from 'react'
import ChatIcon from '../icons/ChatIcon';

class Chat extends React.Component {
    state = {
        open: false
    }

    toggleOpen = () => {
        this.setState(state => ({ open: !state.open}));
    }

    render() {
        const {open} = this.state;
        return open ?  (
            <div 
                onClick={this.toggleOpen} 
                className="open chat">
                Open
            </div>
        ) : (
            <div 
                onClick={this.toggleOpen} 
                className="closed chat"
                title="Chat With An Agent">
                <ChatIcon /> 
            </div>
        );
    }
}

export default Chat;