const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCByOQJjav0CUDwxCk-jVNRQ&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c4e3324783mshd22945ecb186a33p18c4d3jsna62b159f619e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = response.json();
  return data;
}

// CREAM0S UNA FUNCION ANONIMA PARA QUE SE EJECUTE AUTOMATICAMENTE
(async () => {
  try {
    const videos = await fetchData(API);
    let view = ` 
        ${videos.items.map(
          (video) => `
        <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
    >
      <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
        `
        )}
    `;

    //agregamos el template a HTML
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
