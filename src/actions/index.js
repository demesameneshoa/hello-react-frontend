import axios from 'axios';

const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/random_greeting');
    dispatch({ type: 'FETCH_RANDOM_GREETING_SUCCESS', payload: response.data.greeting });
  } catch (error) {
    dispatch({ type: 'FETCH_RANDOM_GREETING_FAILURE', payload: error.message });
  }
};

export default fetchRandomGreeting;
