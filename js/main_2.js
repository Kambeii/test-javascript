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
