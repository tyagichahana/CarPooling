import axios from 'axios'
import * as Auth from '@/constants/Endpoints'

export default {
    loginUser: data => axios({ ...Auth.LOGIN, data }).then(res => res.data),
    createPN: data => axios({ ...Auth.CREATE_PN, data }).then(res => res.data),
    addPNUser: data =>
        axios({
            ...Auth.ADD_PN_USERS,
            headers: {
                'X-GA-ID': '2377',
            },
            data,
        }).then(res => res.data),
}
