// import * as types from '@/constants/Types'
// import Api from '@/utils/Api'
// import Store from '@/reducer'
// export const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY'

// export const loginAction = data => {
//     Store.dispatch({
//         type: types.LOGIN_LOADING,
//     })
//     Api.loginUser(data)
//         .then(res => {
//             if (res.success) {
//                 Store.dispatch({
//                     type: types.LOGIN_SUCCESS,
//                     data: res,
//                 })
//                 window.localStorage.setItem(AUTH_TOKEN_KEY, res.token)
//                 window.location.reload()
//             } else {
//                 Store.dispatch({
//                     type: types.LOGIN_FAILURE,
//                     data: res.error,
//                 })
//             }
//         })
//         .catch(err => {
//             Store.dispatch({
//                 type: types.LOGIN_FAILURE,
//                 data: err,
//             })
//         })
// }

// export function redirectLogin() {
//     const localToken = window.localStorage.getItem(AUTH_TOKEN_KEY)
//     if (localToken) {
//         Store.dispatch({
//             type: 'LOGIN_REDIRECT',
//         })
//     } else {
//         const { pathname } = window.location
//         if (pathname === '/') {
//             return
//         } else {
//             window.location.href = '/'
//         }
//     }
// }
// export default loginAction
