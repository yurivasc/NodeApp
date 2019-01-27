const getGrade = (score) => {
    score = parseInt(score);
    
    if (score >= 25)
        return "A"
    if (score >= 20 && score < 25)
        return "B"
    if (score >= 15 && score < 20)
        return "C"
    if (score >= 10 && score < 15)
        return "D"
    if (score >= 5 && score < 10)
        return "E"
    else{
        return "F"
    }
    

}



console.log(getGrade(25));