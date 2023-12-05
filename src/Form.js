import React from 'react';
import {useState} from 'react';




const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const  handleChange = (event) => {
  setInputValue(event.target.value);
}
return (
  <div className='formContainer'>
      <form className='formBody'>
          <input 
              name='link'
              type='text'
              value={inputValue}
          />
          <input 
              type='submit'
              onSubmit={handleChange}
          />
          <br/>
          <label className='addLink'>please add a link</label>
          
      </form>

  </div>
)
}

export default Form