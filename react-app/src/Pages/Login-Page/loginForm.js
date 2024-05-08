import React, { useState } from 'react';


// import PasswordChecklist from 'react-password-checklist';

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Hier kannst du die Anmeldelogik implementieren (z. B. API-Aufruf, Validierung usw.)
      console.log('Benutzername:', username);
      console.log('Passwort:', password);
      console.log('Dauerhaft eingeloggt bleiben:', rememberMe);
    };
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Benutzername:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Passwort:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Dauerhaft eingeloggt bleiben</label>
      </div>
      <button type="submit">Anmelden</button>
    </form>
  );
};


export default Login;