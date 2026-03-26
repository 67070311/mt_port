function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

/* 🔥 กดตรงไหนก็ปิด */
document.addEventListener("click", function(e) {
  const menu = document.getElementById("menu");
  const btn = document.querySelector(".menu-btn");

  // ถ้าคลิกนอก menu และนอกปุ่ม
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("active");
  }
});
