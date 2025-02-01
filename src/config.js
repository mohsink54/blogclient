const config = {
    env: {
        imageKit: {
            publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
            urlEndpoint: import.meta.env.VITE__IMAGEKIT_URL_ENDPOINT,
        },
    },
};

export default config;