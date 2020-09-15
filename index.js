let baseURL= 'https://picsum.photos/v2/list';
let button= document.querySelector('p');
let pageNumber= 1;
let url;

//grab HTML elements
let container= document.querySelector('.container')
let body= document.querySelector('body');
let row= document.querySelector('.row');
let image= document.querySelector('img');
let boxText= document.querySelector('h4');


//eventlistener
button.addEventListener('click', fetchNewPhotos);


// if (image.addEventListener('mouseover', image)) {
//     boxText.style.color = 'red';
// } else {
//     boxText.style.color = 'white';
// }





//Functions



//FIRST FETCH WHEN PAGE LOADS

function fetchPhotos(){
    fetch(baseURL)
    .then(result => result.json())
    .then(json => displayPhoto(json)) //set timeout 1s
    }


//NEW FETCH PROMPTED BY CLICK
function fetchNewPhotos(e){
    pageNumber++;
    console.log(pageNumber);

    while (row.firstChild) {
        row.removeChild(row.firstChild);
    }

      url = `${baseURL}?page=${pageNumber}`;

      fetch(url)
        .then(result => result.json())
        .then(json => displayPhoto(json))
       
}

//FUCTION THAT ACTUALLY CREATES THE PHOTOS
function displayPhoto(json){
    console.log(json);
    
    for(let i=0; i< 12; i++){
        let box= document.createElement('div');
        let downloadBox= document.createElement('div');
        box.className='.col';
        downloadBox.className='.txtOnImage'
        let img= document.createElement('img');
        let link =document.createElement('a');
        let note= document.createElement('a');
        img.src= `${json[i].download_url}`; 
        img.loading="lazy";
        note.href= `${json[i].url}`;
        note.className= "linkText";
        
        row.appendChild(box);
        box.appendChild(downloadBox);
        box.appendChild(link);
        link.appendChild(img);
        downloadBox.appendChild(note);


        
        // document.querySelector('body').addEventListener('mouseenter', function(e) {
        //     console.log(e);
        //     if (e.target.children[0].innerText.toLowerCase() === "download"){
        //         note.style.color = 'red';
        //     } else {
        //         note.style.color = 'white';
        //     }
        // })
   

        note.innerText="DOWNLOAD";
        note.style.fontFamily="Oswald";
      
        
       


    }
 
 
}

fetchPhotos()
// function changeColor(){
//     boxText.style.color="red";
// }




    

    

    //queryselectorall (row) img[0] append body
    //assign images to rows
    //public APIS https://github.com/public-apis/public-apis

         
    // img1.src= ` ${json[0].download_url}?grayscale&blur=1` ;
    // img2.src= ` ${json[1].download_url}?grayscale&blur=1` ;
    // img3.src= ` ${json[2].download_url}?grayscale&blur=1` ;
    // img4.src= ` ${json[3].download_url}?grayscale&blur=1` ;
    // img5.src= ` ${json[4].download_url}?grayscale&blur=1` ;
    // img6.src= ` ${json[5].download_url}?grayscale&blur=1` ;
    // img7.src= ` ${json[6].download_url}?grayscale&blur=1` ;
    // img8.src= ` ${json[7].download_url}?grayscale&blur=1` ;
    // img9.src= ` ${json[8].download_url}?grayscale&blur=1` ;
    
    
    
    // body.appendChild(img1);
    // body.appendChild(img2);
    // body.appendChild(img3);
    // body.appendChild(img4);
    // body.appendChild(img5);
    // body.appendChild(img6);
    // body.appendChild(img7);
    // body.appendChild(img8);
    // body.appendChild(img9);
    
    





//queryselector all for each 




//
//https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation

