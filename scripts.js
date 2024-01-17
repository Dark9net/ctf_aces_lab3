function setCookie() {
  const cookieName = "The_Ctf_Flag_is_not_far_now";
  const cookieValue = "ACES{value1+value2+value3}";
  document.cookie = `${cookieName}=${cookieValue}; path=/`;
  window.open("aces_pkt.html","_blank");
  window.location.href = "https://aces.ioepc.edu.np/";

}
