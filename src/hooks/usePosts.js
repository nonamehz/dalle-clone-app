import { useState } from 'react';


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const usePosts = () => {

    const [loading, setLoading] = useState(false);

    const startLoadingPosts = async () => {

        setLoading(true);

        const response = await fetch(BASE_URL + '/api/v1/posts', {
            method: 'GET'
        });

        const data = await response.json();

        setLoading(false);

        return data.data;

    }

    const startSavingPost = async (post) => {

        setLoading(true);

        const response = await fetch(BASE_URL + '/api/v1/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });

        const data = await response.json();

        setLoading(false);

        return data;

    }

    return {
        loading,
        startLoadingPosts,
        startSavingPost,
    }

}