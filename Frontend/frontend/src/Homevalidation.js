function validation(values) {
    let error = {}
    if (values.dependence === "") {
        error.dependence = "Should not be empty"
    }
    else if (isNaN(values.dependence)) {
        error.dependence = "Should be a number"
    }
    else {
        error.dependence = ""
    }

    
    if(values.Aincome ===""){
        error.Aincome = "Should not be empty"
    }else if (isNaN(values.Aincome)) {
        error.Aincome = "Should be a number"
    }else{
        error.Aincome =""
    }


    if(values.CAincome ===""){
        error.CAincome = "Should not be empty"
    }else if (isNaN(values.CAincome)) {
        error.CAincome = "Should be a number"
    }else{
        error.CAincome =""
    }


    if(values.amount ===""){
        error.amount = "Should not be empty"
    }else if (isNaN(values.amount)) {
        error.amount = "Should be a number"
    }
    else{
        error.term =""
    }

    if(values.term ===""){
        error.term = "Should not be empty"
    }else if (isNaN(values.term)) {
        error.term = "Should be a number"
    }else{
        error.term =""
    }


    if(values.history ===""){
        error.history = "Should not be empty"
    }else if (isNaN(values.history)) {
        error.history = "Should be a number"
    }
    else{
        error.history =""
    }



    if(values.area ===""){
        error.area = "Should not be empty"
    }else if (isNaN(values.area)) {
        error.area = "Should be a number"
    }
    else{
        error.area =""
    }


    return error;
}
export default validation;  