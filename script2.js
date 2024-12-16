const infoBtn = document.querySelector(".med-info-btn");
const returnBtn = document.querySelector(".info-back-btn");
const wrapper = document.querySelector(".wrapper");
const toggleBtn = document.getElementById("info-btn");

const switchScreen = () => {
  wrapper.classList.toggle("show-info");
}

infoBtn.addEventListener("click",switchScreen);
returnBtn.addEventListener("click",switchScreen);



/* Add Photo Functions */

const medImg = document.getElementById("med-img");
const imgInput = document.getElementById("img-input");

imgInput.onchange = function()
{
  medImg.src = URL.createObjectURL(imgInput.files[0]);
}

const renderDetails = () => 
{
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  categoryTasks.forEach((task) => {
    const div = document.createElement("div");
    div.classList.add("info-wrapper");
    div.innerHTML = `
    <div class="image-wrapper">
      <img src="no-image.jpg" id="med-img">
    </div>
    <div class="img-input-box">
      <div>
        <label for="img-input">
          Upload Image
        </label>
      </div>
      <input type="file" accept="image/jpg, image/jpeg, image/png" id="img-input">
    </div>
    <div class="med-details">
      <br>
      Name: ${task.id}
      <br> 
      Type: ${task.type}  
      <br> 
      Category: ${task.category}

    </div>
    `;
  }
  
  )
}
