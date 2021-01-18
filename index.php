<?php 

    include "partials/header.php";
    include "partials/menu.php";

?>

<section class="imagen_banner">
    <div class="contenedor-redes">
    <strong class="titulo_redes">Nuestras Redes: </strong><br>
        <p class="redes">
            <a href=""><i class="fab fa-facebook face"></i></a>
            <a href=""><i class="fab fa-instagram inst"></i></a>
        </p>
    </div>
</section>
<section class="contenido-pagina">

    <div class="container contenedor_">
        <h1 class="text-center titulo fuente1">Catalogo</h1>
        <hr class="hr">
        <div id="prendas" class="row">
            <div id="cargando" class="container">
                <br>
                <p style="text-align: center;">
                    Cargando datos...
                    <br>
                    <img src="./img/preloader.gif" alt="" style="width: 20%;">
                </p>
            </div>
        </div>
    </div>

</section>

<?php include "partials/footer.php"; ?> 
