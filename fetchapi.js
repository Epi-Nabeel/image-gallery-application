document.getElementById("searchBtn").addEventListener("click", async () => {
    const query = document.getElementById("input1").value;
    const numImages = parseInt(document.getElementById("input2").value);

    if (!query || numImages < 2) {
        alert("Please enter a valid keyword and a number of images greater than 1.");
        return;
    }

    try {
        const apiKey = "47101863-ffb6a4f7b2a81e6c2f8433ba9";
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&per_page=${numImages}`);
        const data = await response.json();
        displayResults(data.hits);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

function displayResults(images) {
    const results = document.getElementById("results");
    results.innerHTML = "";

    images.forEach(image => {
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.backgroundColor = "#d9f2d9";
        div.style.padding = "15px";
        div.style.marginBottom = "15px";
        div.style.borderRadius = "8px";
        div.style.textAlign = "center";

        const imgElement = document.createElement("img");
        imgElement.src = image.largeImageURL;
        imgElement.alt = image.tags;
        imgElement.width = 250;
        imgElement.style.marginRight = "20px";

        const details = document.createElement("div");
        details.style.display = "flex";
        details.style.flexDirection = "row";
        details.style.alignItems = "center";
        details.style.flexWrap = "wrap";
        details.style.gap = "15px";

        details.innerHTML = `
            <p><strong>Downloads:</strong> ${image.downloads}</p>
            <p><strong>Likes:</strong> ${image.likes}</p>
            <p><strong>Tags:</strong> ${image.tags}</p>
            <p><strong>Image Type:</strong> ${image.type}</p>
            <p><strong>User Name:</strong> ${image.user}</p>
            <p><a href="${image.pageURL}" target="_blank">URL: ${image.pageURL}</a></p>
        `;

        div.appendChild(imgElement);
        div.appendChild(details);
        results.appendChild(div);
    });
}
