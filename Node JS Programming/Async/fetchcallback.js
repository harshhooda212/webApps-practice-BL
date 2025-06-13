function getUser(callback){
    fetch()
    .then(res=> res.json())
    .then(data => callback(null,data))
    .catch(err => callback(err,null));
}

getUser((error,data)=> {
    if(error){
        console.error(error);
    }
    else{
        console.log(data);
    }
});

function fetUser(callback){
    fetch()
    .then(res=> res.json())
    .then(data => callback(null,data))
    .catch(err=> callback(err,null));
}
getUser((error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})