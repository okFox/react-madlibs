import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange  }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="adjective" id={0} onChange={onChange} />
    <input type="text" placeholder="noun" id={1} onChange={onChange} />
    <input type="text" placeholder="verb, past tense" id={2} onChange={onChange} />
    <input type="text" placeholder="adverb" id={3} onChange={onChange} />
    <input type="text" placeholder="adjective" id={4} onChange={onChange} />
    <input type="text" placeholder="noun" id={5} onChange={onChange} />
    <input type="text" placeholder="noun" id={6} onChange={onChange} />
    <input type="text" placeholder="adjective" id={7} onChange={onChange} />
    <input type="text" placeholder="verb" id={8} onChange={onChange} />
    <input type="text" placeholder="adverb" id={9} onChange={onChange}/>
    <input type="text" placeholder="verb, past tense" id={10} onChange={onChange}/>
    <input type="text" placeholder="adjective" id={11} onChange={onChange}/>
    <button>Create Madlib</button>
    <button type='reset' value='Clear Entries'>Clear Entries</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
