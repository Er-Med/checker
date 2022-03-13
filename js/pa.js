    let word = document.querySelector("#tex");
    let check = document.getElementById("sub");
    let result = document.querySelector(".result")

    word.onfocus = function(){
      result.style.display = "none"
    }
  check.onclick = function(){
        let st = word.value;
        let str = st.toLowerCase().replace(/[^A-Za-z0-9]/g,'') // /[\W_]/g
        let revStr = str.split("").reverse().join("");

        function checkPalindrome(){
          if(str === "" || revStr === "" || str.length < 3){    
            result.style.display = "none"
          }
          else if (str === revStr){
            result.style.display = "flex";
            result.style.backgroundColor = "#05af05";
            result.textContent = "Yes";
          }else{
            result.style.display = "flex";
            result.style.backgroundColor = "red";
            result.textContent = "No";
          }
        }checkPalindrome();
  }
  