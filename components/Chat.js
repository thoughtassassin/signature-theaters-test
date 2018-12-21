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
                className="open chat">
                <header>
                    <h1>Agent Chat</h1>
                    <div
                        className="close-chat"
                        onClick={this.toggleOpen}
                    >
                        &#9447;
                        <span>close</span>
                    </div>
                    </header>
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