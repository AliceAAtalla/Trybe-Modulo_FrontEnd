import React from 'react';
import '../style/form.css';
import optionStates from '../states';
import Curriculum from './Curriculum';

const initialState = {
  name: '',
  email: '',
  cpf: 0,
  adress: '',
  city: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
    };
    this.renderHalf = this.renderHalf.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.btnClear = this.btnClear.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  btnClear() {
    this.setState(initialState);
  }

  button() {
    return (
      <div className='buttons'>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.btnClear}>Clear All</button>
      </div>
    );
  }

  renderHalf() {
    const { city } = this.state;
    return (
      <>
        <div>
          <label htmlFor='city'>City</label>
          <input
            value={city}
            onChange={this.handleChange}
            name='city'
            type='text'
            maxLength='28'
            required
          />
        </div>
        <div>
          <label htmlFor='State'>State</label>
          <select>
            {optionStates.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
        </div>
      </>
    );
  }

  render() {
    const { name, email, cpf, adress } = this.state;
    return (
      <>
        <form>
          <fieldset>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                value={name}
                onChange={this.handleChange}
                name='name'
                type='text'
                maxLength='40'
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                value={email}
                onChange={this.handleChange}
                name='email'
                type='text'
                maxLength='50'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              />
            </div>
            <div>
              <label htmlFor='cpf'>CPF</label>
              <input
                value={cpf}
                onChange={this.handleChange}
                name='cpf'
                type='text'
                maxLength='11'
                required
              />
            </div>
            <div>
              <label htmlFor='adress'>Adress</label>
              <input
                value={adress}
                onChange={this.handleChange}
                name='adress'
                type='text'
                maxLength='200'
                required
              />
            </div>
            {this.renderHalf()}
          </fieldset>
          <Curriculum />
        </form>
        {this.btnClear()}
      </>
    );
  }
}

export default Form;
