export const getAllUsers = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return response
}

export const getAllPosts = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    return response
}

export const getAllComments = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
    return response
}