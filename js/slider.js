const slide = document.querySelector(".slide"),
  firstImg = slide.querySelectorAll("img")[0];
arrowsIcons = document.querySelectorAll(".wrapper .so");

// Click button Scroll

let firstImgWidth = firstImg.clientWidth + 14;

arrowsIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // slide.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    if (icon.id == "left") {
      slide.scrollLeft -= firstImgWidth;
    } else {
      slide.scrollLeft += firstImgWidth;
    }
  });
});

//  Scrolling Funtion

// let isDragStart = false,
//   prevPageX,
//   prevScrollLeft;

// const dragStart = (e) => {
//   isDragStart = true;
//   prevPageX = e.pageX;
//   prevScrollLeft = slide.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragStart) return;
//   e.preventDefault();
//   let positionDeff = e.pageX - prevPageX;
//   slide.scrollLeft = prevScrollLeft - positionDeff;
// };

// const dragStop = () => {
//   isDragStart = false;
// };

// slide.addEventListener("mousedown", dragStart);
// slide.addEventListener("mousemove", dragging);
// slide.addEventListener("mouseup", dragStop);
