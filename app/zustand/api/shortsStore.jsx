import { create } from 'zustand';

export const ShortsStore = create((set) => ({
    shortVideos: [],
    getShortVideos: async (page) => {
        try {
            const response = await fetch(`https://api.pexels.com/videos/popular?page=${page}&per_page=4`, {
                headers: {
                    Authorization:process.env.Auth,
                },
            });
            console.log(response);

            if (!response.ok) {
                throw new Error(`Failed to fetch short videos, status: ${response.status}`);
            }
            if (typeof window !== 'undefined') {
                // Code here will run on the client side
                console.log('Running on the client side');
            } else {
                // Code here will run on the server side
                console.log('Running on the server side');
            }
            const data = await response.json();            
            set({ shortVideos: data?.videos });
        } catch (error) {
            console.error('Error fetching short videos:', error);
        }
    },
}));
