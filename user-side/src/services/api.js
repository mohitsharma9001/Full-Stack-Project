import axios from "axios"

const url = "http://localhost:8000"
export const addUser = async (data) => {
    try {
        return await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${url}/all`)
    } catch (error) {
        console.log(error)
    }
}

