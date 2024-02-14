export function hasValidationError(errors, field){
    if(errors.hasOwnProperty(field)){
        return errors[field] ? true : false;
    }
    return null;
}

export function validationError(errors,field,Name = null){
    if(errors.hasOwnProperty(field)){
        if(!Array.isArray(errors[field])){
            return errors[field];
        }else{
            return errors[field].toString();
        }
    }
    return null;
}

export const focusOnFeild = (name) => {
    if(document.getElementsByName(name)){
        let textbox = document.getElementsByName(name)[0];
        if(textbox){
            textbox.focus();
        }
    }
}

export const getThumbnail = (localhost) => {
    if (localhost.includes('http://localhost:2002')) {
        return localhost.replace('http://localhost:2002', 'https://regiustechnologies.com');
    } else {
        return localhost;
    }
};