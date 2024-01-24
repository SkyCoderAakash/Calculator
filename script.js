let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

btn.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == "="){
      value.innerHTML = eval(value.innerHTML);
    }else{
      if(e.target.innerHTML == "Clear"){
        value.innerHTML = "";
      }else{
        value.innerHTML = value.innerHTML + e.target.innerHTML;
      };
    };
  });
});