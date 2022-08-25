const personalBtn = document.querySelector('#personalBtn')
const techBtn = document.querySelector('#techBtn')
const clickTech = document.querySelector('#clickTech')

const switchActive = (name) => {
    const actual = document.querySelector(`#${name}`);
    if(!actual.classList.contains('active')) {
        const items = actual.parentElement.children;
        for (const item of items) {
            if(item.classList.contains('active')) {
                item.classList.toggle('active');
                actual.classList.toggle('active');
                break;
            }
        }
    }
}

const toggleClick = (item) => {
    const name = item.innerText.toLowerCase()
    const id = item.id
    switchActive(name)
    switchActive(id)
} 

personalBtn.addEventListener('click', (e) => {
    const item = e.path[0];
    toggleClick(item)
})

techBtn.addEventListener('click', (e) => {
    const item = e.path[0];
    toggleClick(item)
})

clickTech.addEventListener('click', () => {techBtn.click()})


