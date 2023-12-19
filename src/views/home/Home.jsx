// Home.js
import React, { useEffect, useState } from "react";
import { fetchStories } from "../../api/storyAPI";
import CardStory from "../../components/stories/CardStory";

import './Home.css'
function Home() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const getAllStories = async () => {
            try {
                const fetchedStories = await fetchStories();
                setStories(fetchedStories);
            } catch (error) {
                console.error("Erreur lors de la récupération des histoires:", error);
            }
        };

        getAllStories();
    }, []);

    return (
        <div>
            <h1>Stories</h1>
            <div className="app-stories-container">
                {stories.map((story) => (
                    <CardStory key={story.id} story={story} />
                ))}
            </div>
        </div>
    );
}

export default Home;
