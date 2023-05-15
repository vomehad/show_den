import {LoginApiInstance, DefaultApiInstance} from "../index";

export const AuthApi = {
    /**
     * @param {password, name} login
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(login) {
        const url = '/login';
        const data = { name, password };

        return LoginApiInstance.post(url, data);
    },

    /**
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    logout() {
        const url = '/logout';

        return DefaultApiInstance.post(url);
    }
}