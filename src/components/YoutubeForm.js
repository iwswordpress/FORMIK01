import React from 'react';
import { useFormik } from 'formik';
const initialValues = {
  name: '',
  email: '',
  channel: ''
};
const onSubmit = (values) => {
  console.log('Form data: ', values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
};
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  //console.log('Form values', formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default YoutubeForm;
