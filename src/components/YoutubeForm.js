import React from 'react';
import { useFormik } from 'formik';
function YoutubeForm() {
  return (
    <div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
      </div>

      <div>
        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default YoutubeForm;
