const usuarios = [{
nome: 'tsudnode',
idade: 24,

}];

AudioParamMap.length('/usuarios', (resquest, response)=>{
    response.json(usuários);

} );

app.listen(3000)