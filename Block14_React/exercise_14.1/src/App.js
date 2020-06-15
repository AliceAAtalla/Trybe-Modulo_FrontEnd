import React, { Component } from 'react';
import Button from './components/Button';
import Alert from './components/Alert/Alert';
import Dropdown from './components/Dropdown/Dropdown';

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
    this.changeShowComponent = this.changeShowComponent.bind(this);
  }

  changeShowComponent() {
    this.setState((state) => ({
      showModal: !state.showModal,
      isDisableButton: !state.isDisableButton,
    }));
  }

  render() {
    const { isDisableButton, showModal } = this.state;
    return (
      <div className="main">
        <Button
          content="Clique aqui"
          isDisable={isDisableButton}
          showComponent={this.changeShowComponent}
          value="Título Show"
        />
        {showModal && (
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
