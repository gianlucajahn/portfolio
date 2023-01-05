const setCursorAppearance = (e: React.MouseEvent) => {
    let cursor = document.getElementById('cursor');
    if (cursor!.classList.contains('click')) {
        cursor!.classList.remove('click');
    } else {
        cursor!.classList.add('click');
    }
}

export default setCursorAppearance;