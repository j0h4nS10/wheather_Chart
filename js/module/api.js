import axios from 'axios'


export const api = async () => {
    try {
    const response = await axios.get('https://aqicn.org/api/es/');
    const data = response.data
    console.log(response)
    return data
    } catch (error){
        console.log(error)
    }
}