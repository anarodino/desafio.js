

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto
// de la lógica funciona bien)

const  jugadorUno  =  {
    nombre : "Ana" ,
    habilidades : {
      ataque : 100 ,
      velocidad : 30 ,
      vida : 60 ,
      magia : 120 ,
    } ,
    artículos : [ "espada" ,  "escudo" ,  "varita" ] ,
  } ;
  
  const  jugadorDos  =  {
    nombre : "Brisa" ,
    habilidades : {
      ataque : 73 ,
      velocidad : 90 ,
      vida : 80 ,
      magia : 100 ,
    } ,
    articulos : [ "escudo" ,  "varita" ,  "capa" ,  "pocion" ] ,
  } ;
  
  //------------------------------------------------ -----------------------//
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  var  contadorPuntosJug1  =  0 ;
  var  contadorPuntosJug2  =  0 ;
  
  //Ganador:
  var  ganador ;
  
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE
  
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.
  
  //EJEMPLO ESTRUCTURA DE COMPARACIÓN
 //if  ( habilidadACompararJugador1  >  habilidadACompararJugador2 )  {
 //  contadorPuntosJug1  =  contadorPuntosJug1  +  1 ;
 // }  else  if  ( condiciónCasoContrario )  {
 //  contadorPuntosJug2 ++ ;
 // }  else {
 //  contadorPuntosJug1 ++ ;
 //  contadorPuntosJug2 ++ ;
 //  }
  
  // (Escribe debajo el código que te permitirá generar esta comparación)
  
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR VELOCIDAD:
  //(Escribir debajo del código que te permitirá generar esta comparación)
  if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
    contadorPuntosJug1++;
 } else if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
  contadorPuntosJug1++;
 } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
 }
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR NIVEL DE VIDA:
  //(Escribir debajo del código que te permitirá generar esta comparación)
  if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
    contadorPuntosJug1++;
  }else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR MAGIA:
  //(Escribir debajo del código que te permitirá generar esta comparación)
  if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia){
    contadorPuntosJug2++;
  }else if (jugadorUno.habilidades.vida > jugadorDos.habilidades.magia){
    contadorPuntosJug1++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo del código que te permitirá generar esta comparación)
  if (jugadorUno.habilidades.articulos < jugadorDos.habilidades.articulos){
    contadorPuntosJug2++;
  }else if (jugadorUno.habilidades.articulos < jugadorDos.habilidades.articulos){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
  //------------------------------------------------ -----------------------//
  
  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determina al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida
  if ( contadorPuntosJug1 < contadorPuntosJug2){
    ganador= jugadorDos.nombre;
  }else if (contadorPuntosJug1 > contadorPuntosJug2){
    ganador=jugadorUno.nombre;
  }else if (contadorPuntosJug1==contadorPuntosJug2){
    ganador= "Empate"
  }
  
  //ejemplo:
  var resultado = {
  jugadorUno: contadorPuntosJug1,
  jugadorDos: contadorPuntosJug2,
   ganador: ganador,
   }
  console.log(resultado);
  //------------------------------------------------ -----------------------//
