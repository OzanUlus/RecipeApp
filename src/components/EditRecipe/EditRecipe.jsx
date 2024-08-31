import React, { useContext, useState } from 'react'
import { ApiContext } from '../../context/ApiContext';


export const EditRecipe = ({ id, image, title, description, onCancel}) => {
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedImage, setUpdatedImage] = useState(image);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const { updateRecipe } = useContext(ApiContext)
    

    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateRecipe(id, {
            title: updatedTitle,
            image: updatedImage,
            description: updatedDescription,
        });
        
    };

    return (
        <div className="input-container">
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <textarea
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                ></textarea>
                <input
                    type="text"
                    value={updatedImage}
                    onChange={(e) => setUpdatedImage(e.target.value)}
                />
                <button type="submit">Güncelle</button>
                <button type="button" onClick={onCancel}>Kapat</button>
            </form>
        </div>
    );
};
export default EditRecipe
