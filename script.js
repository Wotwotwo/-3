document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll(".draggable");

    draggables.forEach((draggable) => {
        let offsetX = 0, offsetY = 0, isDragging = false;


        function startDrag(e) {
            isDragging = true;
            let clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
            let clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

            offsetX = clientX - draggable.offsetLeft;
            offsetY = clientY - draggable.offsetTop;
            draggable.style.cursor = "grabbing";
        }


        function moveDrag(e) {
            if (!isDragging) return;
            let clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
            let clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

            draggable.style.left = clientX - offsetX + "px";
            draggable.style.top = clientY - offsetY + "px";
        }


        function stopDrag() {
            isDragging = false;
            draggable.style.cursor = "grab";
        }

        draggable.addEventListener("mousedown", startDrag);
        document.addEventListener("mousemove", moveDrag);
        document.addEventListener("mouseup", stopDrag);

        draggable.addEventListener("touchstart", startDrag, { passive: true });
        document.addEventListener("touchmove", moveDrag, { passive: true });
        document.addEventListener("touchend", stopDrag);
        
        draggable.style.position = "absolute";
    });
});
