var minibrain = document.getElementById("minibrain");

function changeImage()
{
  document.getElementById("minibrain").style.height="35%";
  document.getElementById("minibrain").style.width="35%";
  return true;
}

function alertMe()
{
  alertmsg = minibrain.src + "\nHight: " + minibrain.height + "\nWidth: " + minibrain.width;
  console.log(alertmsg);
  return true;
}
