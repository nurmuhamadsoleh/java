const app = document.getElementById("app");
import userData from "./Dict.js"; //   import User Data dari file yang berbeda
console.log(app);
// Obejct
// let data = {
//     email : "nursoleh33@gmail.com",
//     username : "nursoleh",
//     age : 25,
//     marriage : false,
//     };
    // Array untuk Membedakan nya menggunakan [] kurung siku, Bisa menampung banyak data yang berbentuk Object

console.log(userData); 

app.innerHTML += `
    
    ${
        userData.map( (element)=>{return `
            <div class='user-card'>
                <h3>${element.username}</h3>
                <ul>
                    <li>${element.email}</li>
                    <li>${element.age}</li>
                    <li>${element.marriage}</li>
                </ul>
            </div>
        `;
        } )
        .join("")
    }
`