const myPromise= new Promise((resolve,reject)=>{
  setTimeout(() =>{
    const success = true;
    if(success){
      resolve("Task Completed");
    }else{
      reject("Task Failed");
    }
  },2000);
});