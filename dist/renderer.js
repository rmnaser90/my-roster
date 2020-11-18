class Renderer{
  constructor(){
    
  }

render(data){
    const source=$('#players-template').html()
    const template=Handlebars.compile(source)
    $('#playersContainer').empty()
    const html = template({data})
    $('#playersContainer').append(html)

}

}