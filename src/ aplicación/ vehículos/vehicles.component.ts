import  {  Component ,  OnInit  }  desde  '@ angular / core' ;
importar  {  NavesService  }  desde  '../naves.service' ;



@ Componente ( {
  selector : 'app-vehicle' ,
  templateUrl : './vehicles.component.html' ,
  styleUrls : [ './vehicles.component.css' ]
} )
export  class  VehiclesComponent  implementa  OnInit  {

  
  listadepeliculas : [] ;

 constructor  ( servicio de  naves privado : NavesService )  {

  esta . listadepeliculas  =  [ ] ;


  
  esta . llenarlistadepeliculas  ( ) ;
 }

 llenarlistadepeliculas  ( )  {

  esta . servicio de naves . traertodaslaspeliculas  ( ) . suscribirse  (
    ( datos )  =>  {
      consola . log  ( "DATOS:"  , datos ) ;
      esta . listadepeliculas  =  datos  [  "resultados"  ] ;

    }
  ) ;
  
 }


  ngOnInit ( ) : void  {
  }

} 
