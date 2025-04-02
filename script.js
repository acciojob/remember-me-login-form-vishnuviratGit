//your JS code here. If 
const inputText=document.getElementById("username");
const inputPass=document.getElementById("password");
const check=document.getElementById("checkbox");
const submitBtn=document.getElementById("submit");
const existing=document.getElementById("existing");

if(localStorage.getItem("username") && localStorage.getItem("password")){
	existing.style.display="block";
}
submitBtn.addEventListener("click", ()=>{
	 const userName=inputText.value;
      const password=inputPass.value;
	 if(check.checked){
		 localStorage.setItem("username", userName);
		 localStorage.setItem("password", password);
		 
	 }
	else{
		localStorage.removeItem("userName");
		localStorage.removeItem("password");
	}
    alert(`Logged in as ${userName}`)
})
existing.addEventListener("click", ()=>{
	const saved=localStorage.getItem("username");
	  alert(`Logged in as saved ${saved}`);
})



