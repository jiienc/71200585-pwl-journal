import React, { useState } from 'react';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [text, setText] = useState('');

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        setText("Welcome Back!")
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setText("Please Login")
    };

    const LogoutButton = ({onClick}) => (
        <button onClick={onClick}>Logout</button>
    );

    const LoginButton = ({onClick}) => (
        <button onClick={onClick}>Login</button>
    );

    const Greeting = () => {
        if (isLoggedIn) {
            return <LogoutButton onClick={handleLogoutClick} />;
        }
        return <LoginButton onClick={handleLoginClick} />;
    };

    return (
        <div>
            <h2>{text || "Please Login"}</h2>
            <Greeting text={text}/>
        </div>
    );
};

export default App;
