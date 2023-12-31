import decode from "jwt-decode";

class AuthService {
    // add try catch to fix jwt invalid token error
    getProfile() {
        try{
        return decode(this.getToken());
        } catch(ex){
        return null;
        }
    };

    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token);
    };

    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem("id_token")
            return true;
        }
        return false;
    };

    getToken() {
        return localStorage.getItem("id_token");
    };

    login(idToken) {
        localStorage.setItem("id_token", idToken);
        window.location.assign("/home");
    };

    logout() {
        localStorage.removeItem("id_token");
        window.location.assign("/");
    };
};

//eslint-disable-next-line
export default new AuthService();