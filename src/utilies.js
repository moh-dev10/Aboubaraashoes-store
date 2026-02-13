 export const getImageUrl = (imageName) => {
    const baseUrl = import.meta.env.BASE_URL;
    return `${baseUrl}/Images/${imageName}`;
};