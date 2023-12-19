// Home.js
import React, { useEffect, useState } from "react";

//API
import { fetchCommentById, createNewComment, deleteCommentById } from "../../api/commentAPI"
//MUI
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';

//Component
import CommentCard from "./CommentCard";


//Toast
import toast from 'react-hot-toast';


function DisplayComments({ storyId }) {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        story: storyId,
        contenue: '',
        auteur: 9,
    });

    useEffect(() => {
        const getAllComment = async () => {
            try {
                const fetchedComments = await fetchCommentById(storyId);
                setComments(fetchedComments);
            } catch (error) {
                console.error("Erreur lors de la récupération des commentaires:", error);
            }
        };

        getAllComment();
    }, [storyId]);

    console.log('comments', comments)

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteCommentById(commentId);
            toast('Le commentaire a été supprimé', {
                icon: '❌',
                style: {
                    borderRadius: '5px',
                    background: '#333',
                    color: '#fff',
                },
            });

            const updatedComments = await fetchCommentById(storyId);
            setComments(updatedComments);
        } catch (error) {
            console.error("Erreur lors de la suppression du commentaire:", error);
        }
    };

    const handleUpdateComments = async () => {
        // Mise à jour de la liste des commentaires après une modification réussie
        const updatedComments = await fetchCommentById(storyId);
        setComments(updatedComments);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const createdComment = await createNewComment(formData);
            console.log("Commentaire créé avec succès:", createdComment);
            toast('Ton commentaire a été publié',
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

            // Mettre à jour l'état des commentaires avec les nouveaux commentaires
            const updatedComments = await fetchCommentById(storyId);
            setComments(updatedComments);

        } catch (error) {
            console.error("Erreur lors de la création du commentaire:", error);
        }
    };

    return (
        <div>
            <h3>Commentaires</h3>
            <Stack spacing={1} className="create-comment-container">

                <Textarea minRows={2} placeholder="Ecrivez votre commentaire" value={formData.contenue}

                    onChange={(e) =>
                        setFormData({ ...formData, contenue: e.target.value })
                    } />
                <Button type="submit" onClick={handleSubmit} className="card-story-btn " variant="outlined" size="small">
                    Poster
                </Button>
            </Stack>
            <div className="app-comments-container">
                {comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} onDeleteComment={handleDeleteComment} onCommentUpdate={handleUpdateComments} storyId={storyId} />
                ))}
            </div>
        </div>
    );
}

export default DisplayComments;
