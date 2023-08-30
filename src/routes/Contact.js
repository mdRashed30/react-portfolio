import React from 'react';
import { Button } from '@mui/material';

function Contact() {
    const containerStyle = {
        backgroundColor: '#333',
        padding: '20px',
        textAlign: 'center',
    };

    const headingStyle = {
        color: 'white',
        fontSize: '24px',
        marginBottom: '20px',
    };

    const buttonStyle = {
        color: 'white',
        backgroundColor: '#1976d2',
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginRight: '10px',
        textDecoration: 'none',
    };

    const buttonHoverStyle = {
        backgroundColor: '#1565c0',
    };

    return (
        <div style={containerStyle}>
            <div style={headingStyle}>
                <h1>Feel free to contact me for any work or suggestions below</h1>
            </div>
            <div>
                <a
                    href='https://www.linkedin.com/in/rahman-rashed-991061212/'
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        style={buttonStyle}
                        sx={{ '&:hover': buttonHoverStyle }}
                    >
                        LinkedIn
                    </Button>
                </a>
                <a
                    href='mailto:soinik.us.army@gmail.com'
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        style={buttonStyle}
                        sx={{ '&:hover': buttonHoverStyle }}
                    >
                        Email
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Contact;
