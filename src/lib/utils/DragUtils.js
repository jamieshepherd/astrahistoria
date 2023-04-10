/*
Inspired by https://gist.github.com/wolfiex/edf6dfeb5df8667faed8a86da57f1638#file-dragthree-jsm
*/

export function dragControls(canvas, dragAction, zoomAction, dragEnd) {
    let mouseDown = false,
        mouseX = 0,
        mouseY = 0;

    canvas.addEventListener(
        'mousemove',
        function (evt) {
            if (!mouseDown) {
                return;
            }
            //console.log('drag')
            evt.preventDefault();
            const deltaX = evt.clientX - mouseX,
                deltaY = evt.clientY - mouseY;
            mouseX = evt.clientX;
            mouseY = evt.clientY;
            dragAction(deltaX, deltaY);
        },
        false
    );

    canvas.addEventListener(
        'mousedown',
        function (evt) {
            evt.preventDefault();
            mouseDown = true;
            mouseX = evt.clientX;
            mouseY = evt.clientY;
        },
        false
    );

    canvas.addEventListener(
        'mouseup',
        function (evt) {
            evt.preventDefault();
            mouseDown = false;
            dragEnd();
        },
        false
    );

    canvas.addEventListener(
        'wheel',
        function (evt) {
            if (evt.deltaY !== 0) {
                zoomAction(evt.deltaY);
            }
        },
        false
    );
}
