// some function for help.....

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

export async function getDevices () {
    try {
        const res = await fetch('/api/devices');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

export async function getManufacturer () {
    try {
        const res =await fetch('/api/manufacturers');
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

export async function getCalls () {
    try {
        const res =await fetch('/api/calls');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}

export async function getTeams () {
    try {
        const res =await fetch('/api/team');
        const data = await res.json();
        return data 
    } catch (error) {
        console.log(error)
    }  
}


