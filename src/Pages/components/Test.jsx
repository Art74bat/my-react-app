import { useId } from "react"



export default function Test () {

    const id = useId()

    // const upload = {
        // return new Promise((resolve,reject)=>{
        //     const xhr = new XMLHttpRequest()
        //     xhr = open('POST',url)
    
        //     xhr.onload = () => {
        //         if(xhr.status === 200){
        //             resolve(xhr.response)
        //         }else{
        //             reject(xhr.response)
        //         }
        //     }
        //     const myData = new FormData()
        //     myData.append('image',file)
        //     xhr.send(myData)
        // })
    // }

    return (
        <>
        <label htmlFor={id}>
            <input type="file" id={id} />
        </label>
        </>
    )
}
