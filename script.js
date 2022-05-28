let cad = `
<div class="menu">
    <div class="imagen">
        <img src="images/logo.png" alt="logo" width="150" height="auto">
    </div>    
        <nav>
            <div class="selectores">
                <div class="textos">
                    <p><a href="index.html">Inicio</a></p>
                </div>
                <div class="textos">
                    <p><a href="productos.html">Productos</a></p>
                </div>
                <div class="textos">
                    <p><a href="contacto.html">Contacto</a></p>
                </div>
            </div>
        </nav>
</div>
`
document.getElementById("idheader").innerHTML = cad;

cad = `
<div class="columnas">
    <div>
        <h2>Contacto</h2>
        <div>
            <a href=""><i class="fa-brands fa-whatsapp"> 11-3568-7729 / 11-6750-3869 </i></a>
        </div>
        <div>
            <a href="https://www.facebook.com/La-Tatoña-954188131271087"><i class="fa-brands fa-facebook"> Facebook</i></a>
        </div>
        <div>
            <a href="https://www.instagram.com/la.tatona/"><i class="fa-brands fa-instagram"> Instagram</i></a>
        </div>
    </div>
    <div>
        <h2>Horario</h2>
        Lunes a Sábados: 9 a 13:30 / 17 a 20 hs
    </div>
</div>
`
document.getElementById("idfooter").innerHTML = cad;