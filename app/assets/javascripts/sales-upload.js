$("button").on('click', ()=> {
    
    let fileReader = new FileReader();
      
    var file = $('#sale-upload-id').prop('files')[0];
    if (!file) {
        alert("Failed to load file");
        return false;
    } 
    
    fileReader.onload = ()=> {
  
      let lines = fileReader.result.split('\n');
      let header = lines[0].split('\t');
  
      let result = lines.filter((line,index)=> index > 0 && line.length > 0)
      .map(line => `{${line.split('\t').map((value,index)=> {
        value = isNaN(value) ? `"${value}"` : value;
        return `"${header[index]}": ${value}`.replace(' ', '_');
      }).join(',').split()}}`).map(line => JSON.parse(line));
         
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/sale',
        data: JSON.stringify(result),
        contentType: 'application/json',
        success: data => $("body").html(data),
        error: () => alert("Error to create sales"),
        dataType : "html"
      }); 
    };
   
   fileReader.readAsText(file);
  
  })   