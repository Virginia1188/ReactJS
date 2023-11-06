
const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    try {
        const res = await fetch(baseUrl);
        const result = await res.json();

        const users = Object.values(result);

        return(users)
    } catch (error) {
        console.log(error);
    }


}
