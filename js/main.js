const init = () => {
    const urlDb = "https://script.googleusercontent.com/macros/echo?user_content_key="+key+"&lib="+lib;
    var url = "https://server-personal.herokuapp.com/json-blog.php";
    axios.get(urlDb)
    .then(function (response) {
        
        const datos = response.data.data;
        datos.map((items) =>{
            console.log(items);
            let html = `

                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                    <img src="${items.imagen_web}" class="card-img-top" alt="${items.ref}">
                        <div class="card-body">
                            <p class="card-text">
                                <i class="fas fa-dollar-sign"></i> <strong>Precio al detal:</strong> <span class="badge bg-info text-dark">${items.precio_al_detal}</span><br>
                                <i class="fas fa-dollar-sign"></i> <strong>Precio por 6:</strong> <span class="badge bg-info text-dark">${items.precio_x6}</span><br>
                                <i class="fas fa-dollar-sign"></i> <strong>Precio por 12:</strong> <span class="badge bg-info text-dark">${items.precio_x12}</span><br>
                            </p>
                        </div>
                    </div>
                </div>
            `;
            $("#prendas").append(html);
        })
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        $("#cargando").hide();
    });
}
init();
// $(document).ready(function(){
//     init();
// })

