import { getApiHeaders } from "./apiHeaders";
import axios from "axios";


//Get Story by id

export const fetchCommentById = async (id) => {
  
    try {
      const response = await axios.get(`http://localhost:8081/comments/comment/${id}`, 
        { headers: getApiHeaders() }
      );
      return response.data;
      
    } catch (error) {
      console.error(
        `Erreur lors de la récupération des commentaires de la story ${id}`,
        error
      );
      throw error;
    }
  };

  //Create Comment
export const createNewComment = async (formData) => {
  
  try {
    const response = await axios.post(`http://localhost:8081/comments/create/comment`, formData, { headers: getApiHeaders() });

    return response.data;
  } catch (error) {
    console.error("Erreur pendant la création du commentaire:", error);
    throw error;
  }
};

//Update Comment by id 
export const updateCommentyById = async (commentId, formData) => {
  
  try {
    const response = await axios.put(`http://localhost:8081/comments/comment/${commentId}`, formData, { headers: getApiHeaders() });

    return response.data;
  } catch (error) {
    console.error("Erreur pendant la mise à jour du commentaire:", error);
    throw error;
  }
};

//Delete Comment by id 
export const deleteCommentById = async (commentId) => {
  
  try {
    const response = await axios.delete(`http://localhost:8081/comments/comment/${commentId}`, { headers: getApiHeaders() });

    return response.data;
  } catch (error) {
    console.error("Erreur pendant la suppression du commentaire:", error);
    throw error;
  }
};