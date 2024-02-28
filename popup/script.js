let innerHTML = "";

for (const row of data) {
  innerHTML += `<div class="row">`;

  for (const app of row) {
    innerHTML += `
      <a href="${app.url}" target="_blank">
        <div class="app">
          <img src="${app.icon}" alt="${app.name}" />
          <span>${app.name}</span>
        </div>
      </a>
    `;
  }

  innerHTML += `</div>`;
}

document.querySelector("#container").innerHTML += innerHTML;
