async function fetchD(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data=await response.json();
        console.log(data);
    }
    catch(error){
    console.error('Fetch error:', error);
    }
}

async function fetchD(){
    try{
        const response= await fetch();
        if(!response.ok){
            throw new Error();
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

async function fetch(){
    try{
        const response = await fetch();
        if(!response.ok){
            throw new Error();
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}



