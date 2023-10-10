// Made two variables for open button & close button
let openRulesTab = document.querySelector('#rules_button');
let closeRulesTab = document.querySelector('#close_button');

openRulesTab.addEventListener("click",function(){
    document.body.classList.add("rulesTab-active");
})

closeRulesTab.addEventListener("click",function(){
    document.body.classList.remove("rulesTab-active");
})