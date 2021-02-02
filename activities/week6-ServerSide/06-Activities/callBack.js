function favColor(numberRequired, callBack){
    let error = null;

    const colors = [
        {color: "red"},
        {color: "orange"},
        {color: "blue"},
    ];
    if (colors.length > numberRequired){
        error = "too many colors "
    }
    favColor(1,(err,data) => {
        

    })
}