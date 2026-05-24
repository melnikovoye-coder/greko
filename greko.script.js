// Зміна фону сайту
function changeTheme(){

    const colors = [
        "#e6e6e6",
        "#d9edf7",
        "#fce4ec",
        "#e8f5e9",
        "#fff8e1"
    ];

    let randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}

// Додавання своїх фото
const upload = document.getElementById("upload");
const gallery = document.getElementById("gallery");

upload.addEventListener("change", function(event){

    const files = event.target.files;

    for(let i = 0; i < files.length; i++){

        const file = files[i];

        if(file.type.startsWith("image/")){

            const img = document.createElement("img");

            img.src = URL.createObjectURL(file);

            gallery.appendChild(img);
        }
    }
});
