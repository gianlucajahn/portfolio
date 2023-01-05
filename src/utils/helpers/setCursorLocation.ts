const setCursorLocation = (e: React.MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;
    let cursor = document.getElementById('cursor');
    cursor!.style.left = `${x}px`;
    cursor!.style.top = `${y}px`;
}

export default setCursorLocation;