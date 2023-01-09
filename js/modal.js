document.addEventListener("click", (evt) =>{
openModal(evt);
closeModal(evt)
})
function openModal(evt) {
  const el = evt.target.closest("[data-modal-open]")

  if(!el) return;

  const modalSelector = el.dataset.modalOpen;
  
  document.querySelector(modalSelector).classList.add("show")
}
function closeModal(evt) {
  const el = evt.target
  
  if(!el.matches("[data-modal]")) return;

  el.classList.remove("show")
}
document.querySelector("keyup", evt =>{
  
})