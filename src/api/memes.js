const url = 'https://api.imgflip.com/get_memes'
export const getAllMmemes = async()=>{
    const response = await fetch(url);
    return await response.json();
}