const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    alert("Ваша ширина экрана: " + window.screen.width)
    alert("Ваша высота экрана: " +  window.screen.height)
});