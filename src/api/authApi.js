import axiosClient from "./axiosClient";

const authApi = {
    // sign in
    signIn: (params) => {
        const url = '/auth/login';
        return axiosClient.post(url, params);
    },

    //sign up
    signUp: (params) => {
        const url = '/auth/signup';
        return axiosClient.post(url, params);
    },

    activate: (params) => {
        const url = '/auth/activate';
        return axiosClient.post(url, params);
    },

    //getAccountList
    // getAccountList: (params) => {
    //     const url = '/account/find';
    //     return axiosClient.get(url, {params});
    // },

    // //getAccountInfor
    // getAccountInfor: () => {
    //     const url = '/account/detail';
    //     return axiosClient.get(url);
    // },

    // // edit personal information
    // updateProfile: (params) => {
    //     const url = '/account/update';
    //     return axiosClient.put(url, params);
    // },

    // //log out 
    // signOut: () => {
    //     const url = '/account/sign-out';
    //     return axiosClient.post(url);
    // },

    // //request reset password
    // requestToResetPassword: (params) => {
    //     const url = '/account/request-reset-password';
    //     return axiosClient.post(url, params);
    // },

    // //reset password
    // resetPassword: (params) => {
    //     const url = '/account/reset-password';
    //     return axiosClient.post(url, params);
    // },

    // // change password
    // changePassword: (params) => {
    //     const url = '/account/change-password';
    //     return axiosClient.put(url, params);
    // },
};

export default authApi;
