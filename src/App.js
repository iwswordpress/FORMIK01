import React from 'react';
import './App.css';
import OldYoutubeForm from './components/OldYoutubeForm';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='form'>
          <OldYoutubeForm />
        </div>

        <div className='form'>
          <RegistrationForm />
        </div>
        <div className='form'>
          <EnrollmentForm />
        </div>
        <div className='form'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
