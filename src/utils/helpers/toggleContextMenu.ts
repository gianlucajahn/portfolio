const toggleContextMenu = (e: any) => {
    e.preventDefault();
    const contextMenu = document.getElementById('context-menu');

    let x = e.pageX, y = e.pageY;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let cmWidth = contextMenu!.offsetWidth;
    let cmHeight = contextMenu!.offsetHeight;

    // if x is greater than "windows width - contextMenu width", set the x value 
    // to "window width - contextMenu width". Else, set x to the offsetX. Similarly with y.
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;

    contextMenu!.style.left = `${x}px`;
    contextMenu!.style.top = `${y}px`;
    contextMenu!.style.visibility = "visible";
}

export default toggleContextMenu;