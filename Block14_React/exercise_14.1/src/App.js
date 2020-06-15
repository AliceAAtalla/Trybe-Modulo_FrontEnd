import React, { Component } from 'react';
import Button from './components/Button.jsx';
import Alert from './components/Alert/Alert.jsx';
import Dropdown from './components/Dropdown/Dropdown.jsx';

const content = [
  { id: 1, item: 'The Office' },
  { id: 2, item: 'Game of Thrones' },
  { id: 3, item: 'Friends' },
  { id: 4, item: 'How I Met Your Mother' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      isDisableButton: false,
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  changeShowComponent = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
      isDisableButton: !state.isDisableButton,
    }));
  };

  render() {
    return (
      <div className='main'>
        <Button
          content='Clique aqui'
          isDisable={this.state.isDisableButton}
          showComponent={this.changeShowComponent}
          value='Título Show'
        />
        {this.state.showModal && (
          <Alert hideComponent={this.changeShowComponent}>
            {{ title: 'Algum título', content: 'Algum conteúdo', timeSeconds: 3 }}
          </Alert>
        )}
        <Dropdown list={content}>List:</Dropdown>
      </div>
    );
  }
}

export default App;
