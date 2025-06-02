fetchData()
  .then(data => console.log(" Success:", data))
  .catch(err => console.error(" Error:", err))
  .finally(() => console.log(" Done")); 
