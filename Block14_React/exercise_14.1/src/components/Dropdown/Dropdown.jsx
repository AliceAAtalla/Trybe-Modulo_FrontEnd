import React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    const { list } = this.props;
    this.state = {
      isOpen: false,
      clickedItem: list[0].id,
    };
  }

  toggle() {
    return this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  }

  handleClick(id) {
    this.setState({ clickedItem: id });
  }

  render() {
    const { children, list } = this.props;
    const { clickedItem, isOpen } = this.state;
    const { item } = list.find(({ id }) => id === clickedItem);
    return (
      <>
        <div className="main-dropdown">
          <h3 className="title">{children}</h3>
          <div className="container" onClick={this.toggle.bind(this)}>
            {item}
          </div>
          <div className={isOpen ? 'dropdown-menu' : 'dropdown-menu-hidden'}>
            {list.map(({ id, item }) => (
              <div key={id} onClick={() => this.handleClick(id)}>
                <span>{item}</span>
                <br />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

Dropdown.defaultProps = {
  children: 'Minha Lista',
};

Dropdown.proptypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, item: PropTypes.string }))
    .isRequired,
  children: PropTypes.string,
};

export default Dropdown;
