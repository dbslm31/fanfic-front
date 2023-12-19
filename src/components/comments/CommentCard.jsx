import { useState } from 'react';

//MUI
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';

//API
import { updateCommentyById } from "../../api/commentAPI";

//Toast
import toast from 'react-hot-toast';

//Assets
import Avatar from '../../assets/Number=95.png'

function CommentCard({ comment, onDeleteComment, onCommentUpdate, storyId }) {

    const commentId = comment.id;
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.contenue);

    const handleDelete = async () => {
        try {
            onDeleteComment(commentId);
        } catch (error) {
            console.error("Erreur lors de la suppression du commentaire:", error);
        }
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = async () => {
        try {
            // Envoyer les modifications au serveur
            await updateCommentyById(commentId, { contenue: editedContent });
            toast('Le commentaire a été mis à jour', {
                icon: '🔄',
                style: {
                    borderRadius: '5px',
                    background: '#333',
                    color: '#fff',
                },
            });
            setIsEditing(false); // Désactiver le mode édition après la sauvegarde réussie
        } catch (error) {
            console.error("Erreur lors de la mise à jour du commentaire:", error);
        }
    }

    const handleCancelEdit = () => {
        setEditedContent(comment.contenue);
        setIsEditing(false);
    }

    return (
        <>
            <div className="card-comment">
                <div className="card-comment-pic-container">
                    <img src={Avatar} alt="" className="autor-pic" />
                </div>
                <div className="card-comment-description">
                    <h3>{comment.user.pseudo}</h3>
                    {isEditing ? (
                        <Textarea
                            className="edit-comment"
                            size='small'
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                    ) : (
                        <p>{comment.contenue}</p>
                    )}
                </div>
                <div className="card-comment-action">
                    {isEditing ? (
                        <>
                            <DoneIcon fontSize="small"
                                onClick={handleSave} />
                            <ClearIcon fontSize="small"
                                onClick={handleCancelEdit} />

                        </>
                    ) : (
                        <>
                            <ModeEditIcon
                                className="card-comment-btn"
                                fontSize="small"
                                onClick={handleEdit}
                            />
                            <HighlightOffIcon
                                className="card-comment-btn"
                                color="error"
                                fontSize="small"
                                onClick={handleDelete}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default CommentCard;
