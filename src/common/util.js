export const isLogin = () => {
    if (localStorage.getItem("Token")) {
        return true;
    }

    return false;
}