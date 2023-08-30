import React from "react";


const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '30px 60px',
    backgroundColor: 'black',
};

const resumeSectionStyles = {
    backgroundColor: '#ffffff',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '30px',
    textAlign: 'center',
};

const resumeLinkStyles = {
    fontSize: '24px',
    color: '#1976d2',
    textDecoration: 'none',
    marginBottom: '20px',
};

const proficiencyStyles = {
    marginTop: '30px',
    textAlign: 'left',
};

const categoryStyles = {
    fontSize: '20px',
    color: '#ff3d00',
    marginBottom: '10px',
};

const listStyles = {
    listStyleType: 'disc',
    marginLeft: '20px',
};

export default function Resume() {
    return (
        <div style={pageStyles}>
            <div style={resumeSectionStyles}>
                <a
                    href='https://docs.google.com/document/d/16r2XjGInh5KUcc5MgIKF78NqXf0BZb6b1HJOzNF0GbM/edit'
                    target="_blank"
                    rel="noopener noreferrer"
                    style={resumeLinkStyles}
                >
                    View Resume
                </a>
            </div>
            <div style={resumeSectionStyles}>
                <div style={proficiencyStyles}>
                    <div style={categoryStyles}>Front-End Proficiencies</div>
                    <ul style={listStyles}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                </div>
                <div style={proficiencyStyles}>
                    <div style={categoryStyles}>Back-End Proficiencies</div>
                    <ul style={listStyles}>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
