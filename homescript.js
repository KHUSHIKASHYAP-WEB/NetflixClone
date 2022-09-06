const changeMode = () => {
  let main = document.getElementsByClassName("main");
  let mymain = document.getElementById("main").classList;
  let myDownload = document.getElementById("Download").classList;
  let myfaq = document.getElementById("faqs").classList;
  let mychildren = document.getElementById("childrenProfile").classList;
  let mywatch = document.getElementById("watchEverywhere").classList;
  let myontv = document.getElementById("OnTv").classList;
  let footer = document.getElementById("footer").classList;
  mymain.toggle("mainlight");
  myDownload.toggle("mydark");
  myfaq.toggle("mydark");
  mychildren.toggle("mydark");
  myontv.toggle("mydark");
  mywatch.toggle("mydark");
  footer.toggle("mydark");
};
function loadCoupon() {
  document.getElementById("coupon").style.display = "block";
  document.getElementById("coupon").style.opacity = "1";
}
function closeCoupon() {
  document.getElementById("coupon").style.display = "none";
  document.getElementById("coupon").style.opacity = ".5";
}
