import React from 'react';

const Header = (props) => {
  return (
    <h1 className="Header">
      {props.title}
    </h1>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'My app',
      isHandlingChanges: true,
    };

    document.addEventListener('contextmenu', () => {
      this.setState((state) => {
        return {
          isHandlingChanges: !state.isHandlingChanges,
        };
      });
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  };


  render() {
    const handleChange =  this.state.isHandlingChanges
      ? this.handleChange
      : null
    ;

    return (
      <div className="App">
        <Header title={this.state.title} />

        <input
          type="text"
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default App;
