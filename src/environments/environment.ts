export const environment = {
    apiLink: 'https://reqres.in/api'
};


/*
npm install bootstrap bootstrap-icons

npm i bootstrap @ng-bootstrap/ng-bootstrap

npm i @ng-select/ng-select

npm install @ngx-translate/core

in app.module.ts
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
          deps: [HttpClient]
      }
    }),
    NgSelectModule,
    AuthModule,
    PagesModule,
    AppRoutingModule,
    ReactiveFormsModule

"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

in html
<link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body>
<app-root></app-root>
<script src="../node_modules/jquery/dist/jquery.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>
</body>

src/styles.css
@import "~bootstrap/dist/css/bootstrap.css"

in component
 constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }



  import { lastValueFrom } from 'rxjs';


ng generate environments


export const environment = {
    apiLink: 'https://reqres.in/api'
};  */
