import React from 'react';
import '../style/form.css';

class Curriculum extends React.Component {
  render() {
    return (
        <fieldset>
          <label htmlFor=''>Resume Summary</label>
          <textarea maxLength='1000' required />
          <label htmlFor=''>Job Role</label>
          <textarea maxLength='40' required />
          <label htmlFor=''>Job Description</label>
          <input type='text' maxLength='500' required />
        </fieldset>
    );
  }
}

export default Curriculum;
