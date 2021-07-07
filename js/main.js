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
                    <div class="card" style="">
                        <img src="${items.imagen_web}" class="card-img-top" alt="${items.ref}">
                        <h5 class="text-center nombre-prenda">${items.ref}</h5 >
                        <div class="card-body">
                            <p class="card-text">
                                <i class="fas fa-dollar-sign"></i> <strong>Precio al detal:</strong> <span class="badge bg-info text-dark">${items.precio_al_detal}</span><br>
                                <i class="fas fa-dollar-sign"></i> <strong>Precio por 6:</strong> <span class="badge bg-info text-dark">${items.precio_x6}</span><br>
                                <i class="fas fa-dollar-sign"></i> <strong>Precio por 12:</strong> <span class="badge bg-info text-dark">${items.precio_x12}</span><br>
                                <hr>
                                <strong>Preguntar por disponibilidad de la prenda</strong><br>
                                <a href="https://api.whatsapp.com/send?phone=573205936059&text=Hola%20quiero%20saber%20sobre%20esta%20prenda:%20${items.ref}" terget="wap_1"><i class="fab fa-whatsapp icono-wap-prendas"></i></a> 
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

