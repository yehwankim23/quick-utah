for (const row of data) {
  const rowDiv = document.createElement("div");
  rowDiv.className = "row";

  for (const app of row) {
    const appDiv = document.createElement("div");
    appDiv.className = "app";

    appDiv.innerHTML = `
      <img src="${app.icon}" alt="${app.name}" />
      <span>${app.name}</span>
    `;

    appDiv.addEventListener("click", async () => {
      const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

      if (["새 탭", "New Tab", "New tab"].includes(tab.title)) {
        chrome.tabs.update(tab.tabId, { url: app.url });
        window.close();
        return;
      }

      chrome.tabs.create({ url: app.url });
    });

    rowDiv.appendChild(appDiv);
  }

  document.querySelector("#container").appendChild(rowDiv);
}
