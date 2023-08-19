import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "dev-j2alxbgipkpe44ui.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck