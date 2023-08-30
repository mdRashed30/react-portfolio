import React from 'react';
import { Card } from 'primereact/card';
import ImgOfMe from '../Components/Picture';

function About() {
    const aboutStyle = {
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '33',
        textAlign: 'center',
        width: '90%',
        height: '100%',
        maxHeight: '70%',
        overflowY: 'auto',
        background: 'black',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '75%',
    };

    const paragraphStyle = {
        fontSize: '150%',
        fontWeight: '100',
        color: 'white',
        margin: '1px',
        padding: '10px',
    };

    return (
        <div style={aboutStyle}>
            <Card className="md:w-25rem" style={contentStyle}>
                <div className="m-0">
                    <ImgOfMe />
                    <p style={paragraphStyle}>
                        I am a full stack software developer. I enjoy using JavaScript, React/Redux, PostgreSQL, CSS, and HTML in my projects. Currently, I'm self-learning Node.js, Express, and Python. I'm always finding time to learn more!

                        Something that I love about software development is the opportunity to work with people from a wide range of disciplines. I enjoy working with other professionals who are striving towards the same goal.

                        On a more personal note, I love watching basketball and working out. Although my favorite player of all time is LeBron James, I'm always eager to watch the Golden State Warriors.

                        Please feel free to reach out to me here if you want to know more about me or just to have a chat!
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default About;
