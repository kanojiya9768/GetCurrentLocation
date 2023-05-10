

const button = document.getElementById('GetLocation');

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
            let res = await fetch(url);
            let loca = await res.json();
            console.log(loca);

            show_location(loca)
        }catch(err){
            console.log(err);
        }

    })
})



show_location = (address) => {
    let card = document.getElementById('card');

    let content = `
    <img src="https://media.tenor.com/57TRBE6D9C8AAAAC/location-graphics.gif" alt="gifs">
    <p>${address.display_name}</p>
    `

    card.innerHTML = content;

    document.getElementById('loader').style.display = 'none';
    document.getElementById('Loading_text').style.display = 'none';
}
