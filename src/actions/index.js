import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'http://localhost:3030/categoeries'
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}`)
    dispatch({type: READ_EVENTS, response})
}