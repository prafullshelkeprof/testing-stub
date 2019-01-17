async function fetchTrending() {
    const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=10`);
    const json = await res.json();

    const createMeme = (currObj, index) => {
        return `
                <h3>${currObj.title}</h3>
                <img src="${currObj.images['fixed_width'].url}?api_key=dc6zaTOxFJmzC"></img>
                `;
    }
    document.getElementById('main').innerHTML = json.data.map(createMeme).join('\n');
}

window.addEventListener('load', async e => {
    await fetchTrending();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');
        }
    }
});
