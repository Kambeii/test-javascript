var minibrain = document.getElementById("minibrain");

function changeImage()
{
  document.getElementById("minibrain").style.height="50%";
  document.getElementById("minibrain").style.width="50%";
  return true;
}

function alertMe()
{
  alertmsg = minibrain.src + "\nHight: " + minibrain.height + "\nWidth: " + minibrain.width;
  console.log(alertmsg);
  return true;
}

function changeColor()
{
  document.getElementById("h3style").style.color="red";
  document.getElementById("h3style").firstChild.nodeValue="Excited";
  return true;
}

function changeAgain()
{
  document.getElementById("h3style").style.color="gray";
  document.getElementById("h3style").firstChild.nodeValue="Bored";
  return true;
}

function changeText()
{
  document.getElementById("h3style").style.color="blue";
  document.getElementById("h3style").firstChild.nodeValue="Don't touch me! :[";
  return true;
}

function showPara()
{
  document.getElementById("first").style.visibility=(document.formex.firstpara.checked) ? "visible" : "hidden";
  document.getElementById("second").style.visibility=(document.formex.secondpara.checked) ? "visible" : "hidden";
  document.getElementById("third").style.visibility=(document.formex.thirdpara.checked) ? "visible" : "hidden";
  return:true;
}
