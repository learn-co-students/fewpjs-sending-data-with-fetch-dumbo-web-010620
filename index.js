// // Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// }); 
    
// // const getDogs = () => {
// //   return fetch('http://localhost:3000/dogs')
// //     .then(response => response.json())
// // }

// // getDogs();
// fetch("http://localhost:3000/users", {
//     method: "POST", 
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// });

const getUsers = () => {
  return fetch("http://localhost:3000/users")
        .then(response => response.json())
}

getUsers().then(console.log)