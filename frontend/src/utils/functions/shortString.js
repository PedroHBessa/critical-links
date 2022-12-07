export const shortString = (string) => {
    if(string.length > 15){
        const result =  string.substring(0, 14) + "..."
        return result
    }
    return string
}