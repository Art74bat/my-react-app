// some function for help.....

// import { data } from "react-router-dom";

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

// получить Price hardware
export async function getHard () {
    try {
        const res =await fetch('/api/hards');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

// получить Price software
export async function getSoft () {
    try {
        const res =await fetch('/api/softs');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

// получить Price corporate
export async function getCorp () {
    try {
        const res =await fetch('/api/corporate');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  

}

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


export async function getPosts () {
    try {
        const res =await fetch('/api/posts');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

export async function getPost (id) {
    try {
        const res =await fetch(`/api/posts/${id}`);
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}


