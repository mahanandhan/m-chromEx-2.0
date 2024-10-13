let arr = []
let inputEl = document.getElementById("input-el")
let saveEl = document.getElementById("save-el")
let ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("arr"))
let deleteEl = document.getElementById("delete-el")

if(leadsFromLocalStorage){
    arr = leadsFromLocalStorage
    renderLeads()
}

deleteEl.addEventListener("click", function(){
    localStorage.clear()
    arr = []
    renderLeads()
})


saveEl.addEventListener("dblclick", function(){
    arr.push(inputEl.value)
    inputEl.value = ""
    console.log(arr);
    renderLeads()
    localStorage.setItem("arr", JSON.stringify(arr))
})


function renderLeads(){
    let listItem = ''
    for(let i = 0 ; i < arr.length ; i++){
        listItem += "<li> <a target = '_blank' href = '" + arr[i] + "'>" + arr[i] + "</a> </li> "
    }
    ulEl.innerHTML = listItem
}
