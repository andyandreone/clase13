const { emit } = require("nodemon")

socket.on('messages', function(data){
    render(data)
})
function render(data){
    var html = data.map(function(elem,index){
        return(`<div>
           <strong>${elem.author}</strong> 
           <em>${elem.message}</em>
        </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html
}

