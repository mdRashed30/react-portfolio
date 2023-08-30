import React from 'react';

const homeStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '.1em',
    zIndex: '3',
    textAlign: 'center'
};

const nameHdr = {
    fontSize: '450%',
    fontWeight: '800'
};

const titleHdr = {
    fontSize: '250%'
};

const Home = () => {
    return (
        <div style={homeStyle}>
            <h1 style={nameHdr}>Md Mamatajur Rashed</h1>
            <h2 style={titleHdr}>Software Developer</h2>
        </div>
    );
};

export default Home;
