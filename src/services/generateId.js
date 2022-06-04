const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36) 
    const id = date + random
    return id
}

export default generateId;
