// fetch('https://randomuser.me/api/')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         // Now you can use the data as needed
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


fetch('https://randomuser.me/api/?results=5')
.then(response=>{
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json()
})
.then(data=>{
    data.results.forEach((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`Gender: ${user.gender}`);
        console.log(`Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Cell: ${user.cell}`);
        console.log(`Nationality: ${user.nat}`);
        console.log(""); // Add an empty line for better readability
    });

})
.catch(error=>{
    console.error('There was a problem with the fetch operation:',error)
})