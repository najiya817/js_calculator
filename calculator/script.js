function buttonclick(val){
    document.getElementById("screen").value+=val 
}
// value=val : oru value koduth adh maritt next value kodkumbo verum
// value+=val :oru num adch next number adth varum

function clearDisplay()
{
    document.getElementById("screen").value=""
}
function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}