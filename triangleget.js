function handleSubmit()
{
    let baselength=document.getElementById("base");
    let baseValue=baselength.value;

    let heightElement=document.getElementById("height");
    let heightValue=heightElement.value;

  

    let area = (heightValue*baseValue)/2;

    

    let resultValue=document.getElementById("resultarea");
    resultValue.innerHTML="<p > Area of the triangle :  "+ area + ".</p>";
}