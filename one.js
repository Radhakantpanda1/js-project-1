let colorBox = document.querySelectorAll('.box');

colorBox.forEach((elem) => {
    elem.addEventListener("click", () => {
        console.log(elem.id);
        console.log(window.getComputedStyle(elem));
        let color=window.getComputedStyle(elem).getPropertyValue('background-color');
        document.querySelector('.main').style.backgroundColor = `${color}`
    });
});
