function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a imagem corretamente
  const img = document.querySelector("#profile img")

  // trocar imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar@3x.png")
  }
}
