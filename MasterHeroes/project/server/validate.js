
    const validaNick = (nickname,msg) => {
            if(!nickname){
                throw msg
        }
            if(Array.isArray(nickname) && nickname.length === 0 ) {
                throw msg
        }
            if(typeof nickname === 'string' && !nickname.trim()){
                throw msg
        } 
    }
module.exports = {
    validaNick
}
