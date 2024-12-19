window.onload = function() {
    document.querySelectorAll('.table-cont').forEach(table => {
        table.style.opacity = 0;
        setTimeout(() => {
            table.style.transition = "opacity 1s ease-in-out";
            table.style.opacity = 1;
        }, 200);
    });
};
