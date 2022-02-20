function calculate(num1, num2, callback){
    let res = num1 + num2;
    callback(res)
}
function print(data){
    console.log (data);
}
calculate((5, 10, data) => {
    console.log (data)
})

new Promise((success,fail) => {
    const nilai=10;
    if(nilai >= 10) {
        success(nilai)
    }else {
        eror("Error")
    }

})

myPromise
 .then((data) => {
     console.log(data);
 })
  .catch((error) => {
      console.log(error)

  })

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  fetch(API_URL,{
      headers: {
          'Accept': 'application/json'
          'Content-Type':'application/json'
      },
      method: 'GET',
  })
