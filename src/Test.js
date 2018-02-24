import React from 'react';

const titleStyles = {
  fontFamily: 'sans-serif',
  fontSize: 16,
  color: 'skyblue',
};

export default class Test extends React.Component {
  state = {
    list: ['B', 'L', 'T'],
    counter: 3,
    text: '',
  };

  handleButtonClick = () => {
    console.log('click');
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddShoppingBag = () => {
    const currentBag = this.state.list;
    const newBag = currentBag.concat(this.state.text);
    this.setState({
      list: newBag,
      text: '',
    });
  };

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleAddShoppingBag();
    }
  };

  handleRemove = (key) => {
    const list = this.state.list;
    // list.splice(key, 1);
    const newList = list.filter(
      (item, index) => index !== key);
    this.setState({
      list: newList,
      counter: newList.length,
    });
  };
  
  render() { 
    return (
      <div>
        Count: {this.state.list.length}
        <h3 style={titleStyles}>{this.props.title}</h3>
        <ul>
          {this.state.list.map((item, key) => (
            <li key={item}>
              {item} 
              <button 
                style={{
                  backgroundColor: 'orange',
                  fontSize: 30,
                  marginLeft: 30
                }}
                onClick={() => this.handleRemove(key)}
              >x</button>
            </li>
          ))}
        </ul>
        <input 
          value={this.state.text} 
          onChange={this.handleInputChange}
          onKeyPress={this.handleEnter}/>
        <button onClick={this.handleAddShoppingBag}>Add</button>
      </div>
    );
  }
}