async function getData(){
    const blobdata = await fetch('https://randomuser.me/api/');
    const data = await blobdata.json();
    return data;
}

const cardsContainer = document.querySelector('.cards');

document.querySelector('#newCard').addEventListener('click', () => {
    getData().then(data => {
        const finaldata = data.results[0];
        const cardHtml = `<div class="card w-70 p-4 rounded-sm bg-zinc-600">
                <img class="w-32 h-32 rounded-2xl object-cover mb-4 object-center" src="${finaldata.picture.large}" alt="${finaldata.name.first} ${finaldata.name.last}">
                <h3 class="font-semibold text-2xl">${finaldata.name.first} ${finaldata.name.last}</h3>
                <h5 class="text-sm font-semibold opacity-50">${finaldata.login.username}</h5>
                <h6 class="text-sm opacity-40">${finaldata.email}</h6>
                <p class="mt-3 text-xs font-semibold opacity-80">${finaldata.location.city}, ${finaldata.location.state}, ${finaldata.location.country}</p>
                <p class="mt-2 text-xs opacity-70">${finaldata.phone} • ${finaldata.cell}</p>
            </div>`;

        cardsContainer.innerHTML += cardHtml;
    });
});