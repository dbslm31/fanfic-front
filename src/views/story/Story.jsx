import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//Components
import DisplayComments from "../../components/comments/DisplayComments";

//API
import { fetchStoryById, DeleteStoryById } from "../../api/storyAPI";

//MUI
import Button from '@mui/material/Button';

//Toast
import toast from 'react-hot-toast';

import './Story.css';

function Story() {
    const [story, setStory] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getStoryById = async () => {
            try {
                const fetchedStory = await fetchStoryById(id);
                setStory(fetchedStory);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'histoire :", error);
            }
        };

        getStoryById();
    }, [id]);

    const handleDelete = async () => {
        try {
            await DeleteStoryById(id);
            toast('La fanfiction a été supprimée',
                {
                    icon: '❌',
                    style: {
                        borderRadius: '5px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            navigate("/");

        } catch (error) {
            console.error("Erreur lors de la suppression de l'histoire:", error);
        }
    }

    // Affiche un chargement ou rien tant que les données ne sont pas chargées
    if (!story) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="story">
            <h1>{story.titre}</h1>
            <div className="story-actions">
                <Link to={`/story/update/${id}`}>
                    <Button className="story-btn  btn-outline" variant="outlined" size="small">
                        Modifier
                    </Button>
                </Link>
                <Button className="story-btn" variant="outlined" size="small" color="error" onClick={handleDelete}>
                    Supprimer
                </Button>
            </div>
            <p>{story.contenue}</p>
            {/* Additional fields can be displayed here */}
            <Link to={`/`}>
                <Button className="story-btn  btn-outline" variant="outlined" size="small">
                    Retourner aux fanfictions
                </Button>
            </Link>
            <DisplayComments storyId={id} />
        </div>
    );
}

export default Story;
