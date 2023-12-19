import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// MUI
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';

// API
import { updateStoryById, fetchStoryById } from "../../api/storyAPI";

// Toast
import toast from 'react-hot-toast';

// CSS
import "../create/CreateStory.css";

function UpdateStory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titre: '',
        contenue: '',
    });
    const [originalData, setOriginalData] = useState({
        titre: '',
        contenue: '',
    });

    useEffect(() => {
        const getStoryById = async () => {
            try {
                const fetchedStory = await fetchStoryById(id);
                setOriginalData({
                    titre: fetchedStory.titre,
                    contenue: fetchedStory.contenue,
                });
                setFormData({
                    titre: fetchedStory.titre,
                    contenue: fetchedStory.contenue,
                });
            } catch (error) {
                console.error("Erreur lors de la récupération de l'histoire :", error);
            }
        };

        getStoryById();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const updatedStory = await updateStoryById(id, formData); // Envoyer les données du formulaire
            console.log("Histoire mise à jour avec succès:", updatedStory);
            toast.success('La fanfiction a été mise à jour', {
                icon: '🔄',
                style: {
                    borderRadius: '5px',
                    background: '#333',
                    color: '#fff',
                },
            });

            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'histoire:", error);
        }
    };

    return (
        <div className="create-story">
            <h1>Modifier une fanfiction</h1>
            <Stack spacing={2} className="create-story-container">
                <Input
                    size="sm"
                    placeholder="Titre"
                    value={formData.titre}
                    onChange={(e) =>
                        setFormData({ ...formData, titre: e.target.value })
                    }
                    required
                />
                <Textarea
                    minRows={20}
                    placeholder="Modifiez votre histoire ici"
                    value={formData.contenue}
                    onChange={(e) =>
                        setFormData({ ...formData, contenue: e.target.value })
                    }
                />
                <div className="btn-action-container">
                    <Link to={`/story/${id}`}>
                        <Button className="card-story-btn" variant="outlined" size="small" color="error">
                            Annuler
                        </Button>
                    </Link>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="card-story-btn btn-outline"
                        variant="outlined"
                        size="small"
                    >
                        Enregistrer
                    </Button>

                </div>
            </Stack>
        </div>
    );
}

export default UpdateStory;
