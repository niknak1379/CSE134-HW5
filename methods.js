
export function customGet(){

    //get the form input values
    let id = document.getElementById('numID').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toISOString();

    //serialize the inpout for url use
    let serialized = encodeURIComponent(`${id} ${name} ${body} ${date}`)
    const url = `https://httpbin.org/get?${serialized}`;

    //make the get request
    fetch(url)
      .then(response => response.json())
      .then(data => {
        customOut(data);
      })
      .catch(error => {
        console.error(error);
      });
    ;
}

export function customPut(){

    //get the input form values
    let id = document.getElementById('numID').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toISOString();

    //make the body of the request
    let putBody = {
        id : id,
        article_name : name,
        article_body : body,
        date : date
    }
    
    //set the parameters for the rerquest
    const fetchParam = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(putBody)
    };

    //make the requestf
    fetch('https://httpbin.org/put', fetchParam)
    .then(response => response.json())
    .then(data => {

        //write the output
        customOut(data);
    })
    .catch(error => {
        console.error(error);
    });
}
export function customPost(){

    //grab the form input values
    let Id = document.getElementById('numID').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toISOString();

    //set values for post body
    let postBody = {
        id: Id,
        article_name : name,
        article_body : body,
        date : date
    }
   
    //set parameters for the post request
    const fetchParam = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postBody)
    };

    //make the requeset
    fetch('https://httpbin.org/post', fetchParam)
    .then(response => response.json())
    .then(data => {
        //write output
        customOut(data);
    })
    .catch(error => {
        console.error(error);
    });
}
export function customDel(){

    //set request parameters
    const fetchParam = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    //make request
    fetch('https://httpbin.org/delete', fetchParam)
    .then(response => response.json())
    .then(data => {
        //write data
        customOut(data);
    })
    .catch(error => {
        console.error(error);
    });
}
function customOut(inputData){

    //get the output tag and reset contents
    let output = document.getElementById('response');
    output.innerHTML=``;

    //create table
    let table = document.createElement('table');
    table.setAttribute('border', '1px');

    //parse the input jason packet and write to the table
    for ( let key in inputData) {
        let object = inputData[key];

        //handle if the input is an object
        if (typeof inputData[key] == "object"){

            let row = document.createElement('tr');
            row.innerHTML=`<td>${key}<td>`;
            table.appendChild(row);

            //handle the paramters of the object
            for (let key in object) {
                let row = document.createElement('tr');
                row.innerHTML=`<td><td>
                <td>${object[key]}<td>`;
                table.appendChild(row);
            }
        }
        //add the row to the tabel
        else {
            let row = document.createElement('tr');
            table.appendChild(row);
            row.innerHTML = `<td>${key}<td>
                            <td>${inputData[key]}<td>`;
        }
    }
    output.appendChild(table);
}
