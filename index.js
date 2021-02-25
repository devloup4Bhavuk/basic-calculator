$('document').ready(()=>{
    var input = $('#input')
    var answer = $('button[data-value="="]')
    var clear = $('button[data-value="C"]')
    var expression = ''
    $('.values , .operators').click(function(){
        if(input.text() == 'ERROR'){
            input.text('')
        }
        var text = input.text()
        expression +=  $(this).attr('data-value')
        if($(this).attr('data-value') == '*'){
            input.html(text + '&times')
        }
        else if($(this).attr('data-value') == '/'){
            input.html(text + '&divide')
        }
        else{
            input.text(text + $(this).attr('data-value'))
        }
    })
    answer.click(()=>{
        try {
            input.text(eval(expression))
            expression = eval(expression)
        }
        catch(e){
            input.text('ERROR')
            expression = ''
        }
    })
    clear.click(()=>{
        input.text('')
        expression = ''
    })
})