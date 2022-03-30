function searchFood(){
 const searchFood = document.getElementById("searchFood");
 const searchText = searchFood.value;

 searchText.value = "";

 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
 
 fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResults(data.meals))
}

document.getElementById("button-addon2").onclick = searchFood;

function displaySearchResults(meals){
 const searchResult = document.getElementById("searchResult");

 for(const meal of meals){
   console.log(meal)
   searchResult.innerHTML += `
   <div class="col">
     <div class="card h-100">
       <img src="${meal.strMealThumb}" class="card-img-top">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,100)}...</p>
         <button class="btn btn-danger" onclick="loadMealDeatils('${meal.idMeal}')">Details</button>
       </div>
     </div>
   </div>
   `
 }
  
}

function loadMealDeatils(mealId){
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

  fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]))
}

function displayDetails(mealDetail){
  let details = document.getElementById("details");

  details.innerHTML = `
  <div class="card h-100">
  <img src="${mealDetail.strMealThumb}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${mealDetail.strMeal}</h5>
    <p class="card-text">${mealDetail.strInstructions.slice(0,300)}...</p>
    <a href="${mealDetail.strYoutube}">Learn More</a>
  </div>
</div>
  `
}