function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function login()
{
let a = document.getElementById("zx2").value;
let b = document.getElementById("yz2").value;


if((a=="Rishiq") && (b == "12345"))
{

window.location.replace("http://127.0.0.1:5500/project/project1.html")


}
else
{
alert("WRONG (ID OR PASS) Or CREATE NEW ACCOUNT ");
}
}
