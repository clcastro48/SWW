importar  {  async ,  ComponentFixture ,  TestBed  }  desde  '@ angular / core / testing' ;

importar  {  VehiclesComponent  }  desde  './vehicles.component' ;

describe ( 'VehiclesComponent' ,  ( )  =>  {
   componente let : VehiclesComponent ;
  let  fixture : ComponentFixture < VehiclesComponent > ;

  beforeEach ( async ( ( )  =>  {
    TestBed . configureTestingModule ( {
      declaraciones : [  VehiclesComponent  ]
    } )
    . compileComponents ( ) ;
  } ) ) ;

  beforeEach ( ( )  =>  {
    accesorio  =  TestBed . createComponent ( VehiclesComponent ) ;
    componente  =  accesorio . componenteInstance ;
    accesorio . detectChanges ( ) ;
  } ) ;

  it ( 'should create' ,  ( )  =>  {
    esperar ( componente ) . toBeTruthy ( ) ;
  } ) ;
} ) ;
© 2020 GitHub, Inc.
