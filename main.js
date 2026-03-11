function guess(){

const name = document.getElementById("nameInput").value;
const result = document.getElementById("result");

result.innerHTML = "Loading...";

fetch(`https://api.nationalize.io/?name=${name}`)
.then(res => res.json())
.then(data => {

result.innerHTML = "";

data.country.forEach(c => {

const percent = (c.probability * 100).toFixed(2);
const flag = `https://flagsapi.com/${c.country_id}/flat/64.png`;

result.innerHTML += `
<div class="country">
<img src="${flag}">
<span>${c.country_id} : ${percent}%</span>
</div>
`;

});

});
}