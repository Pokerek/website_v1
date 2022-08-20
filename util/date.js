exports.convertDate = (date, sep = '/') => {
    const newDate = new Date(date)

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    
    const year = newDate.getFullYear()
    const month = months[newDate.getMonth()]
    const day = newDate.getDate()
    
    return `${day} ${month} ${year}`.replaceAll(' ', sep);
}