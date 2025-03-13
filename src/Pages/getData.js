// some function for help.....
// данные о пользователях
export async function getUser (token) {
    try {
        const res = await fetch('/api/users',{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }
}
// получить устройства
export async function getDevices () {
    try {
        const res = await fetch('/api/devices');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}
// получитьпроизводителя
export async function getManufacturer () {
    try {
        const res =await fetch('/api/manufacturers');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}
// получить отзывы
export async function getReviews () {
    try {
        const res =await fetch('/api/reviews');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

// данные о сообщениях(заказать звонок и т.д)
export async function getCalls () {
    try {
        const res =await fetch('/api/calls');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

// данные о работниках
export async function getTeams () {
    try {
        const res =await fetch('/api/team');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

// получить данные из формы..(эксперимент!!)
export const getFormValues = (form) => {
    const formData = new FormData(form);

    const values = [...formData.values()];
    const isEmpty = values.includes('');

    const data = Object.fromEntries(formData);
     return { isEmpty, data }
}

