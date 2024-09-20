const getdata = () => {
    
    
    let data = JSON.parse(localStorage.getItem('data'));
    

    if (!data) {
        return [];
    } else {
        return data;
    }
}



export default getdata