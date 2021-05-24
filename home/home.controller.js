class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.fakeDB = [
      {
  id: 1,
  Name: "Olympie",
  LastName: "MacRory",
  Edad: 94,
  Biography: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  Telefono: ['555-852-7862', '555-450-782']
}, {
  id: 2,
  Name: "Loise",
  LastName: "Glowacki",
  Edad: 36,
  Biography: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  Telefono: ['555-852-7862', '555-450-782']
}, {
  id: 3,
  Name: "Eziechiele",
  LastName: "Piecha",
  Edad: 46,
  Biography: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  Telefono: ['555-852-7862', '555-450-782']
}, {
  id: 4,
  Name: "Laurens",
  LastName: "Seagrave",
  Edad: 33,
  Biography: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  Telefono: ['555-852-7862', '555-450-782']
}, {
  id: 5,
  Name: "Neil",
  LastName: "Backs",
  Edad: 91,
  Biography: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  Telefono: ['555-852-7862', '555-450-782']
}, {
  id: 6,
  Name: "Sharlene",
  LastName: "Schirach",
  Edad: 92,
  Biography: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  Telefono: ['555-852-7862', '555-450-782']
}
]

  }
}

export default HomeCtrl;