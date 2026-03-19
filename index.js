let menu=document.querySelector('#menu')
let group_btn=document.querySelector("#group_btn")
menu.addEventListener("click",()=>{
    group_btn.classList.toggle("hidden");
    group_btn.classList.toggle("flex");

})

let food = document.querySelector("#food")
let recipe
const Indian = document.querySelector("#Indian");
const Canadian = document.querySelector("#Canadian");
const American = document.querySelector("#American");
const Thai = document.querySelector("#Thai");
const British = document.querySelector("#British");
const Russian = document.querySelector("#Russian");

const fetchdata = async(area)=>{
    const api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    const json=await api.json()
    const data =json.meals
    recipe=data
    showdata(recipe)
}
let search = document.querySelector("#search")
search.addEventListener("keydown", async (event) => {
    if (event.key==="Enter"){
        let val = search.value;
     const api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    const json=await api.json()
    const data =json.meals
    recipe=data
    showdata(recipe)
    }
   
});
let showdata =(recipe)=>{
    food.innerHTML = recipe.map((meal) => 
        `<div class="bg-[#1a120e] p-4 rounded-3xl border border-orange-500/20 hover:border-orange-500 transition-all flex flex-col items-center">
            
            <img class="w-full aspect-square object-cover rounded-2xl border-2 border-[#241a15]" 
                 src="${meal.strMealThumb}" 
                 alt="${meal.strMeal}">
            
            <p class="text-white font-semibold mt-4 text-center line-clamp-1">
                ${meal.strMeal}
            </p>
            
            <button class="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer">
                View Recipe
            </button>
        </div>`
    ).join("");
}
fetchdata("Indian");
Indian.addEventListener("click", () => fetchdata("Indian"));
Canadian.addEventListener("click", () => fetchdata("Canadian"));
American.addEventListener("click", () => fetchdata("American"));
Thai.addEventListener("click", () => fetchdata("Thai"));
British.addEventListener("click", () => fetchdata("British"));
Russian.addEventListener("click", () => fetchdata("Russian"));
