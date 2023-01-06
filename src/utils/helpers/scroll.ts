const scroll = (section: string) => {
    let target = document.getElementById(section);
    target?.scrollIntoView({ behavior: 'smooth' });
}

export default scroll;