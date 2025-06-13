fetch()
.then(response=>{
    if(!response.ok){
        throw new Error();
    }
    return response.json();
})
.then(data => {
    console
})