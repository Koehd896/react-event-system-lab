import React from 'react';

class Keypad extends React.Component {

    handleKey = () => console.log('Entering password...');

    render() {
        return <input type="password" onKeyUp={this.handleKey}/>
    }
}

export default Keypad;
