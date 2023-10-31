const addBtn=document.getElementById("add");
const removeBtn=document.getElementById("remove");
const clearBtn=document.getElementById("clear");
const countBtn=document.getElementById("countbtn");
const imageList=document.querySelector(".image-list");

// event listeners
addBtn.addEventListener("click",addImage);
imageList.addEventListener("click",seeImage);
clearBtn.addEventListener("click",clearImages);
countBtn.addEventListener("click",countImages);
removeBtn.addEventListener("click",removeImage);

// fetch image
async function getImage() {
    const data= await fetch("https://dog.ceo/api/breeds/image/random");
    const image= await data.json();
    return image
  }

// add image
  function addImage(){
    getImage().then((image)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        let checkBox=document.createElement("input")
        // div
        div.style.width="22%";
        div.className="col-3 p-0 m-3";
        div.style.position="relative";
        // image
        img.src=image.message;
        img.style.height="250px";
        img.style.width="100%";
        img.className="image remove see";
        // checkbox
        checkBox.type="checkbox";
        checkBox.className="checkbox"
        checkBox.style.width="20px";
        checkBox.style.height="20px";
        checkBox.style.position="absolute";
        checkBox.style.right="0px"

        div.appendChild(img);
        div.appendChild(checkBox);
        imageList.appendChild(div);
    })   
  }

//   modal to see image
  function seeImage(e){
    if(e.target.classList.contains("see")){
        let img = e.target.cloneNode();
        let modalBody=document.querySelector(".modal-body");
        img.className="modal-img";
        modalBody.innerHTML = '';
        modalBody.appendChild(img);
        const myModal = new bootstrap.Modal(document.getElementById('dog-modal'))
        myModal.show();
    }
  }


// Clear Images
  function clearImages(){
    imageList.innerHTML="";
  }

// Count Images

  function countImages(){
    allImages=document.querySelectorAll(".image");
    document.querySelector("#count").textContent=`${allImages.length} doggy Images`;
  }


//   remove Images
  function removeImage(){
    let checkBoxes=document.querySelectorAll(".checkbox");
    checkBoxes.forEach(box => {
        if(box.checked){
            box.parentElement.remove();
        }
    });
  }