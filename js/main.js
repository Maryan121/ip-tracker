// 
let input = document.querySelector('input');
let btn = document.querySelector('button');
let ipAddress = document.querySelector('.ipAddress');
let userLocation = document.querySelector('.location');
let countryCode = document.querySelector('.countryCode');
let isp = document.querySelector('.isp');
let errorMessage = document.getElementById('ErrorMessage');


//setting up the map
var map = L.map('map').setView([4.0442, 30.3358], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    L.marker([4.0442,30.3358]).addTo(map)


    //displaying the info of the user
fetch('https://api.ipgeolocation.io/ipgeo?apiKey=3f49246d137d4df0b0c1b347a3ec9e7e')
.then((res) => {return res.json()})
.then((data) => {
    ipAddress.innerHTML = data.ip
    userLocation.innerHTML = data.city + ',' + data.country_name;
    countryCode.innerHTML = data.calling_code
    isp.innerHTML = data.isp
    map.setView([data.latitude,  data.longitude], 5);
    marker = new L.marker([data.latitude, data.longitude]).addTo(map);
})


    //getting the info of the ip-address entered the input field
btn.addEventListener('click',function(e){
    e.preventDefault();
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=3f49246d137d4df0b0c1b347a3ec9e7e&ip=${input.value}`)
    .then((res)=> {return res.json()} )
    .then((data)=> {
            ipAddress.innerHTML = data.ip
            userLocation.innerHTML = data.city + ',' + data.country_name;
            countryCode.innerHTML = data.calling_code
            isp.innerHTML = data.isp
            map.setView([data.latitude,  data.longitude], 5);
            marker = new L.marker([data.latitude, data.longitude]).addTo(map);
        })
        .catch((err)=>{return err})
       
})
    







