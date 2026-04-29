var data =[
    {name :"Saswata",src:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name :"Saswatati",src:"https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name :"Saswath",src:"https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name :"Sashumita",src:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"}
]

var person= "";

data.forEach((elem)=>{
person += `<div class="person">
                    <div class="img">
                        <img src ="${elem.src}">
                    </div>
                    <h4>${elem.name}</h4>
            </div>`;

});
document.querySelector(".people").innerHTML = person;

document.querySelector("#input").addEventListener("input",(e)=>{
//     var value = e.target.value;
//     var filterData = data.filter((elem)=>{
//         return elem.name.toLowerCase().includes(value.toLowerCase());
//     });
//     var person= "";
//     filterData.forEach((elem)=>{
//         person += `<div class="person">
//                             <div class="img">
//                                 <img src ="${elem.src}">
//                             </div>
//                             <h4>${elem.name}</h4>
//                     </div>`;
// });
// document.querySelector(".people").innerHTML = person;


console.log(e);
var value = e.target.value;

var filterData = data.filter((elem)=>{
     return elem.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
});

console.log(filterData);

var person = "";
filterData.forEach((filterdata)=>{
    person += `<div class="person">
                            <div class="img">
                                <img src ="${filterdata.src}">
                            </div>
                            <h4>${filterdata.name}</h4>
                    </div>`;
});
document.querySelector(".people").innerHTML = person;

});

