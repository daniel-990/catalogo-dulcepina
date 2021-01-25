<?php 

    include "partials/header.php";
    include "partials/menu.php";

?>

<section class="contenido-pagina">

        <div class="row">
            <div class="col-md-6">
                <div class="container contenedor-contacto">
                    <h1 class="text-center titulo fuente1">Contacto</h1>
                    <form>
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" name="nombre" class="form-control" id="nombre" aria-describedby="">
                        </div>
                        <div class="mb-3">
                            <label for="correo" class="form-label">Correo</label>
                            <input type="email" name="correo" class="form-control" id="correo">
                        </div>
                        <div class="mb-3">
                            <label for="asunto" class="form-label">Asunto</label>
                            <input type="text" name="asunto" class="form-control" id="asunto" aria-describedby="">
                        </div>
                        <div class="mb-3">
                            <label for="mensaje" class="form-label">Mensaje</label>
                            <textarea name="mensaje" class="form-control" placeholder="Mensaje" id="mensaje" style="height: 100px"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-enviar"><i class="fas fa-paper-plane"></i> | Enviar</button>
                    </form>
                </div>
            </div>
            <div class="col-md-6 fondo-contacto">
                
            </div>

    </div>

</section>

<?php include "partials/footer.php"; ?> 
