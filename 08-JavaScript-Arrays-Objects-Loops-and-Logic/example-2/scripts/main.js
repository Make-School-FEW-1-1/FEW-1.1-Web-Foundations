// Loop through the contents of data

let str = '';
for (let i = 0; i < data.length; ++i) {
    str += htmlTemp(data[i]);
}
document.querySelector('#content').innerHTML = str;

function htmlTemp(data) {
    const date = new Date(data.date).toDateString();
    const { prefix, first_name, last_name, image} = data;
    return `<div class="user" style="display:flex; justify-content: space-between; border: 1px solid #ddd; margin: 1em; padding: .5em;">
                <h3>${prefix} ${first_name} ${last_name}</h3>
                <p> ${date} <img src="${image}"></p>
                </div>`;
}
