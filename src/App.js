import React, {Component} from 'react';
import './App.css';
import LearnLifecycleMethods from "./LearnLifecycleMethods";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      value: '',
      validStr: 'реакт',
      visibleComponent: true
    }
    this.textInput = React.createRef();
    this.isValue = this.isValue.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.toggleVisibleComponent = this.toggleVisibleComponent.bind(this);
  }

  isValue(event) {
    this.setState({value: event.target.value}, () => {
      if (this.state.value.toLowerCase() === this.state.validStr) {
        this.setState({disabled: true})
      }else {
        this.setState({disabled: false})
      }
    })
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  toggleVisibleComponent() {
    this.setState( {visibleComponent: !this.state.visibleComponent});
  }

  render() {
    return (
      <div className="App">
        <div className='wrapper'>
          <form action='#'>
            <input
            className='input'
            type='text'
            onChange={this.isValue}
            value={this.state.value}
            ref={this.textInput}/>
            <div>
              <button 
              className='submit' 
              disabled={this.state.disabled}>
                Send
              </button>
            </div>
            <button 
            className='btn'
            onClick={this.focusTextInput}>
              Focus
            </button>
          </form>
        </div>

        {this.state.visibleComponent && <LearnLifecycleMethods />}
        <div className='btn-hide'>
          <button onClick={this.toggleVisibleComponent}>Показать / Скрыть</button>
        </div>
      </div>
    );
  }

}

export default App;
