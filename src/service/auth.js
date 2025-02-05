import https from "./config";

const auth = {
    sign_in: (data)=> https.post('/v1/auth/login', data),
    sign_up: (data)=> https.post('/v1/auth/register', data),
    verify: (data)=> https.post('/v1/auth/verify-email', data)
}
export default auth