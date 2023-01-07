const setCursorLocation = (e: any) => {
    let x = e.clientX;
    let y = e.clientY;
    let cursor = document.getElementById('cursor');
    if (y <= 5) {
        cursor?.classList.add('disappear');
    } else {
        cursor?.classList.remove('disappear');
    }
    cursor!.style.left = `${x}px`;
    cursor!.style.top = `${y}px`;
}

export default setCursorLocation;