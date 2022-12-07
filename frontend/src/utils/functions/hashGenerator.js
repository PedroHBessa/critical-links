import md5 from "md5"

export const generateHashFromEmail = (email) =>{
    const hash = md5(email)
    return hash
}