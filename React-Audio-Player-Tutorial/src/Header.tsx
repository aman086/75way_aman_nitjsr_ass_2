import { useState } from 'react';
import SignUpForm from './authentication/Signup';
import LoginForm from './authentication/Login';

function App() {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const handleClick = (componentNumber: number) => {
    setActiveComponent((prevActiveComponent) =>
      prevActiveComponent === componentNumber ? null : componentNumber
    );
  };

  const handleSignUp = (name: string, password: string) => {
    console.log(`Signing up ${name} with password ${password}`);
  };

  const handleLogin = (username: string, password: string) => {
    console.log(`Logging in with username ${username} and password ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold mb-4">Let's start making our application</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleClick(1)}
            className={`px-4 py-2 bg-blue-500 text-white rounded focus:outline-none ${
              activeComponent === 1 && 'bg-blue-600'
            }`}
          >
            Register Here
          </button>
          <button
            onClick={() => handleClick(2)}
            className={`px-4 py-2 bg-green-500 text-white rounded focus:outline-none ${
              activeComponent === 2 && 'bg-green-600'
            }`}
          >
            Login Here
          </button>
        </div>

        {activeComponent === 1 && <SignUpForm onSubmit={handleSignUp} />}
        {activeComponent === 2 && <LoginForm onLogin={handleLogin} />}
      </div>
    </div>
  );
}

export default App;
