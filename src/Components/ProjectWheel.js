import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import weather from '../assets/weather.png';
import noteTaker from '../assets/notetaker.png';
import bookShare from '../assets/bookShare.avif';
import foodRoutte from '../assets/foodRout...avif';

function Project(props) {
    const items = [
        {
            name: "Weather Application",
            img: weather,
            description: "This application tells you the weather.",
            githubLink: 'https://github.com/mdRashed30/Weather-dashboard.git',
            deployedLink: 'https://mdrashed30.github.io/Weather-dashboard'
        },
        {
            name: "Book Share",
            img: bookShare,
            description: "This application tells about Book share.",
            githubLink: 'https://github.com/mdRashed30/BookShare',
            deployedLink: 'https://coolbookshare-8cdf867ffeb3.herokuapp.com/'
        },
        {
            name: "Food Roulette",
            img: foodRoutte,
            description: "This application tells you about ...",
            githubLink: 'https://github.com/mdRashed30/food-roulette',
            deployedLink: 'https://onepingtorulethemall.github.io/food-roulette/'
        },
        {
            name: "Note taker",
            img: noteTaker,
            description: "This application tells you about Note Taker.",
            githubLink: 'https://github.com/mdRashed30/Note-Taker-',
            deployedLink: 'https://whispering-sierra-44654.herokuapp.com/notes'
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

function Item(props) {
    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80vw',
        height: '60vh'
    };

    const imgStyle = {
        maxWidth: '100%',
        maxHeight: '30vh'
    };

    const wholetingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
    };

    return (
        <div style={wholetingStyle}>
            <Paper style={paperStyle}>
                <h2>{props.item.name}</h2>
                <img src={props.item.img} alt={props.item.name} style={imgStyle} />
                <p>{props.item.description}</p>
                <a href={props.item.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button className="CheckButton">
                        GitHub Link
                    </Button>
                </a>
                <a href={props.item.deployedLink} target="_blank" rel="noopener noreferrer">
                    <Button className="CheckButton">
                        Deployed Link
                    </Button>
                </a>
            </Paper>
        </div>
    );
}

export default Project;
