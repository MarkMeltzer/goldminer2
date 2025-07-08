function draw() {
  const canvas = document.getElementById("canvas")
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d")

    let path = new Path2D("M50,25 C35,0,-14,25,20,60 L50,90 L80,60 C114,20,65,0,50,25")
    ctx.fillStyle = "rgb(200 0 0)"
    ctx.fill(path)
  }
}
window.addEventListener("load", draw)
