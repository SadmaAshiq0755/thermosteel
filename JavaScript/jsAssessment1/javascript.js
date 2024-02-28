const btn = document.querySelector('.display');
const container = document.querySelector('.container');

btn.addEventListener('click',(event)=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
            return response.json()
        })
        .then(items =>{
            console.log(items);
            for(i=0;i<5;i++){
                let imageDiv = document.createElement('div');
                let image = document.createElement('img');
                image.src = items[i].thumbnailUrl;
                imageDiv.appendChild(image);
                container.appendChild(imageDiv);
            }
        })
        .then(()=>{
            btn.innerHTML = "done pressing"
    })
})

