


export async function getDevice (){
  const res =await fetch('api/devices');
  // сохранить в json
  const data = await res.json();

  // если данные с ошибкой
  if(data.errors){
      console.log(data.errors);
  }
  return {data};
}



export async function getData() {
    const response = await fetch(`api/devices`);
    if (!response.ok) {
      throw new Response("Failed to load data", { status: 404 });
    }
    const data = await response.json()
    return  {data};
  }


export async function deleteData (id,token) {
    // e.preventDefault()
    const response =await fetch(`api/destroy/${id}`,{
        method:'delete',
        headers:{
          Authorization: `Bearer ${token}`,
      }
    });

    if (!response.ok) {
      throw new Response("Failed to load data", { status: 404 });
    }
    // сохранить в json
    const data = await response.json()
    return data ?? null;
}

export async function post (token,param){
  const res = await fetch(`/api/${param}`,{
    method:'post',
    headers:{
        Authorization:`Bearer ${token}`
    },
  });
  if (!res.ok) {
    throw new Response("Failed to load data", { status: 404 });
  }
  return res.json();
}
