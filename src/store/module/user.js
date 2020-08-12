import {getUserInfo, login, logout} from "@/api/login";
import {getToken, removeToken, setToken} from "@/utils/tokenUtils";

const user = {
    state: {
        username: '',
        token: getToken(),
        loginStatus: false
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USERNAME: (state, username) => {
            state.username = username;
        },
        SET_LOGIN_STATUS: (state, status) => {
            state.loginStatus = status;
        }
    },
    actions: {
        Login({commit}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(res => {
                    setToken(res.token);
                    commit('SET_TOKEN', res.token);
                    commit('SET_LOGIN_STATUS', true);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        GetUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    console.log(res);
                    commit('SET_USERNAME', res.data.username)
                    commit('SET_LOGIN_STATUS', true);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        Logout({commit}) {
            return new Promise((resolve, reject) => {
                logout().then(() => {
                    commit('SET_USERNAME', '');
                    commit('SET_LOGIN_STATUS', false);
                    commit('SET_TOKEN', '');
                    removeToken();
                    resolve();
                }).catch(error => {
                    console.log('退出登录错误')
                    removeToken();
                    reject(error);
                })
            })
        }
    },

    getters: {}


}

export default user;