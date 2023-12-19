import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//MUI
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';

//API
import { createNewStory } from "../../api/storyAPI";

//Toast
import toast from 'react-hot-toast';

//CSS
import "./CreateStory.css"

function CreateStory() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titre: '',
        contenue: '',
        auteur: 3,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const createdStory = await createNewStory(formData);
            console.log("Histoire créée avec succès:", createdStory);
            toast('Ta fanfiction a été publiée',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '5px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );

            // Réinitialiser le formulaire après la création réussie
            setFormData({
                titre: '',
                contenue: ''
            });

            navigate("/");

        } catch (error) {
            console.error("Erreur lors de la création de l'histoire:", error);
        }
    };



    return (
        <div className="create-story">
            <h1>Ecrire une fanfiction</h1>
            <Stack spacing={2} className="create-story-container">
                <Input
                    size="sm"
                    placeholder="Titre"
                    value={formData.titre}

                    onChange={(e) =>
                        setFormData({ ...formData, titre: e.target.value })
                    }
                    required />
                <Textarea minRows={20} placeholder="Ecrivez votre histoire ici" value={formData.contenue}

                    onChange={(e) =>
                        setFormData({ ...formData, contenue: e.target.value })
                    } />
                <Button type="submit" onClick={handleSubmit} className="card-story-btn" variant="outlined" size="small">
                    Poster
                </Button>
            </Stack>

        </div>
    );
}

export default CreateStory;
