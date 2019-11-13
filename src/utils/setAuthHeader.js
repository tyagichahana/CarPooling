import axios from 'axios';

export default token => {
    if (token) {
        axios.defautls.headers.common.authorization = `Token ${token}`;
    } else {
        delete axios.defautls.headers.common.authorization;
    }
};
