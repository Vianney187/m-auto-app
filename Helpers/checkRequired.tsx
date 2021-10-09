export const checkRequired = (v:any) => {
    let success = true;
    Object.keys(v).some(i => {
        if(v[i].length < 1) {
            success = false;
            return true;
        }
    })
    return success;
}