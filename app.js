const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const contents = $$(".tab-pane");
const panes = $$(".tab-pane");

const line = $(".tabs .line");
const tabActive = $(".tab-item.active");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
// console.log(tabs);

tabs.forEach((tab, index) => {
  const pane = panes[index];
  console.log(pane);
  tab.onclick = function () {
    
    

    $(".tab-pane.active").classList.remove("active");
    $(".tab-item.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
    const tabActive = $(".tab-item.active");
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";

  };
});
