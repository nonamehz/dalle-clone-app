import { useState } from 'react';


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useDalleAI = () => {

    const [generatingImg, setGeneratingImg] = useState(false);


    const startGeneratingImage = async (prompt) => {


        setGeneratingImg(true);

        const response = await fetch(BASE_URL + '/api/v1/dalle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        setGeneratingImg(false);

        return data;

    }

    return {
        startGeneratingImage,
        generatingImg,
    }

}