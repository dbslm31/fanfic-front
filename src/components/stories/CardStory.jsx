// CardStory.js
import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

//Assets
import StoryPic from '../../assets/AcmeGroup.jpg'

function CardStory({ story }) {
    console.log('story id', story.id);

    const shortenedContenue = story.contenue.slice(0, 150);
    return (
        <>
            <div className="card-story">
                <div className="card-story-pic-container">
                    <img src={StoryPic} alt="" className="story-pic" />
                </div>
                <div className="card-story-description">
                    <h2>{story.titre}</h2>
                    <p>
                        {shortenedContenue + "..."}
                        <Link to={`/story/${story.id}`}>
                            <Button className="card-story-btn" size="small">
                                Lire la suite
                            </Button>
                        </Link>
                    </p>

                </div>

            </div>
        </>
    );
}

export default CardStory;
