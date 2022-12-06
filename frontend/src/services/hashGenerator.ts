import md5 from "md5"

export const generateHashFromEmail = (email: string) =>{
    const hash = md5(email)
    return hash
}