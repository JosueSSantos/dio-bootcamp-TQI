 const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catBtn = document.getElementsByClassName('btn');
console.log(catBtn);


 const getCats = async () => {
    try {
    const data  = await  fetch(BASE_URL);
    const json = await data.json();
    console.log(json.message)
    return json.message;

    } catch(e){
        console.log('Não carregou a Foto')
    }
 };

 const loadImg =  async () => {
    const catImg = document.getElementsByClassName('cat');
    console.log(catImg);
    catImg.src = await getCats();

 };



 loadImg();