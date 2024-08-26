function notas(){
    const mateiras = ['portugues','matematica','quimica','fisica','ingles'];
    for(var item in materias){
        $('#demo').append("<div class='notas'><h1>disciplina: "+materia[item]+"</h1></div>");
    }
}
