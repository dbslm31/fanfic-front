import { getApiHeaders } from "./apiHeaders";
import axios from "axios";

//Fetch all stories
export const fetchStories = async () => {
  
    try {
      const response = await axios.get(`http://localhost:8081/stories/stories`, 
        { headers: getApiHeaders() }
      );
      return response.data;
      
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des histoires",
        error
      );
      throw error;
    }
};

//Get Story by id

export const fetchStoryById = async (id) => {
  
  try {
    const response = await axios.get(`http://localhost:8081/stories/story/${id}`, 
      { headers: getApiHeaders() }
    );
    return response.data;
    
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'histoire ${id}`,
      error
    );
    throw error;
  }
};

//Create Story 
export const createNewStory = async (formData) => {
  
  try {
    const response = await axios.post(`http://localhost:8081/stories/create/story`, formData, { headers: getApiHeaders() });

    return response.data;
  } catch (error) {
    console.error("Erreur pendant la création de l'histoire:", error);
    throw error;
  }
};

//Update Story by id 
export const updateStoryById = async (id, formData) => {
  
  try {
    const response = await axios.put(`http://localhost:8081/stories/story/${id}`, formData, { headers: getApiHeaders() });

    return response.data;
  } catch (error) {
    console.error("Erreur pendant la mise à jour de l'histoire:", error);
    throw error;
  }
};


//Delete Story by id 
export const DeleteStoryById = async (id) => {
  
  try {
    const response = await axios.delete(`http://localhost:8081/stories/story/${id}`, { headers: getApiHeaders() });

    return response.data;
  } catch (error) {
    console.error("Erreur pendant la suppression de l'histoire:", error);
    throw error;
  }
};

