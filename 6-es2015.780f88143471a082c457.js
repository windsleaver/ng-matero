(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"NW+7":function(e,t,a){"use strict";a.r(t);var r=a("PCNd"),i=a("tyNb"),o=a("3Pt+"),n=a("fXoL"),c=a("tgey"),l=a("XiUz"),m=a("Wp6s"),b=a("kmnG"),d=a("qFsG"),s=a("d3UM"),p=a("FKr1"),u=a("bTqV"),f=a("ofXK"),g=a("NFeN"),h=a("iadO");function Y(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter username "),n.Yb())}function Z(e,t){if(1&e&&(n.Zb(0,"mat-error"),n.Oc(1),n.Yb()),2&e){const e=n.lc();n.Eb(1),n.Qc(" ",e.getErrorMessage(e.reactiveForm1),"")}}function v(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please select gender"),n.Yb())}function y(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter city"),n.Yb())}function O(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter address"),n.Yb())}function x(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter company"),n.Yb())}function E(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter mobile"),n.Yb())}function M(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter tele"),n.Yb())}function C(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter website"),n.Yb())}function I(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter website"),n.Yb())}function F(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter username "),n.Yb())}function w(e,t){if(1&e&&(n.Zb(0,"mat-error"),n.Oc(1),n.Yb()),2&e){const e=n.lc();n.Eb(1),n.Qc(" ",e.getErrorMessage(e.reactiveForm2),"")}}function P(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please select gender "),n.Yb())}function q(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter city"),n.Yb())}function N(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter address "),n.Yb())}function T(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter company "),n.Yb())}function S(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter mobile "),n.Yb())}function A(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter tele"),n.Yb())}function k(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter website "),n.Yb())}function U(e,t){1&e&&(n.Zb(0,"mat-error"),n.Oc(1,"Please enter website "),n.Yb())}let j=(()=>{class e{constructor(e){this.fb=e,this.q={username:"",email:"",gender:""},this.reactiveForm1=this.fb.group({username:["",[o.x.required]],email:["",[o.x.required,o.x.email]],gender:["",[o.x.required]],city:["",[o.x.required]],address:["",[o.x.required]],company:["",[o.x.required]],mobile:["",[o.x.required]],tele:["",[o.x.required]],website:["",[o.x.required]],date:["",[o.x.required]]}),this.reactiveForm2=this.fb.group({username:["",[o.x.required]],email:["",[o.x.required,o.x.email]],gender:["",[o.x.required]],city:["",[o.x.required]],address:["",[o.x.required]],company:["",[o.x.required]],mobile:["",[o.x.required]],tele:["",[o.x.required]],website:["",[o.x.required]],date:["",[o.x.required]]})}ngOnInit(){}getErrorMessage(e){return e.get("email").hasError("required")?"You must enter a value":e.get("email").hasError("email")?"Not a valid email":""}}return e.\u0275fac=function(t){return new(t||e)(n.Tb(o.f))},e.\u0275cmp=n.Nb({type:e,selectors:[["app-forms-elements"]],decls:179,vars:38,consts:[["fxLayout","row wrap",1,"matero-row"],["fxFlex","100",1,"matero-col"],[1,"m-r-8"],["matInput","","placeholder","Username","name","username",3,"ngModel","ngModelChange"],["matInput","","placeholder","Email","name","email",3,"ngModel","ngModelChange"],["name","gender",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["mat-raised-button","","color","primary"],["fxFlex","33.33","fxFlex.lt-sm","100",1,"matero-col"],[1,"form-field-full",3,"formGroup"],["matInput","","placeholder","Simple placeholder","formControlName","username","required",""],[4,"ngIf"],["matInput","","placeholder","Simple placeholder","formControlName","email","required",""],["required","","formControlName","gender","required",""],["matInput","","placeholder","Simple placeholder","formControlName","city","required",""],["matInput","","placeholder","Simple placeholder","formControlName","address","required",""],["matInput","","placeholder","Simple placeholder","formControlName","company","required",""],["matInput","","placeholder","Simple placeholder","type","number","formControlName","mobile","required",""],["matSuffix",""],["matInput","","placeholder","Simple placeholder","type","number","formControlName","tele","required",""],["matInput","","placeholder","Simple placeholder","formControlName","website","required",""],["matInput","","placeholder","Choose a date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-raised-button","","color","primary",1,"m-t-8"],[1,"m-t-16"],["fxFlex","66.67","fxFlex.lt-sm","100",1,"matero-col"],["fxLayout","row wrap","fxLayoutGap","8px grid"],["fxFlex","50","fxFlex.lt-sm","100"],["picker2",""]],template:function(e,t){if(1&e&&(n.Ub(0,"page-header"),n.Zb(1,"div",0),n.Zb(2,"div",1),n.Zb(3,"mat-card"),n.Zb(4,"mat-card-title"),n.Oc(5,"Form Inline"),n.Yb(),n.Zb(6,"form"),n.Zb(7,"mat-form-field",2),n.Zb(8,"input",3),n.hc("ngModelChange",(function(e){return t.q.username=e})),n.Yb(),n.Yb(),n.Zb(9,"mat-form-field",2),n.Zb(10,"input",4),n.hc("ngModelChange",(function(e){return t.q.email=e})),n.Yb(),n.Yb(),n.Zb(11,"mat-form-field",2),n.Zb(12,"mat-label"),n.Oc(13,"Gender"),n.Yb(),n.Zb(14,"mat-select",5),n.hc("ngModelChange",(function(e){return t.q.gender=e})),n.Zb(15,"mat-option"),n.Oc(16,"-- None --"),n.Yb(),n.Zb(17,"mat-option",6),n.Oc(18,"male"),n.Yb(),n.Zb(19,"mat-option",7),n.Oc(20,"female"),n.Yb(),n.Yb(),n.Yb(),n.Zb(21,"button",8),n.Oc(22,"Search"),n.Yb(),n.Yb(),n.Zb(23,"div"),n.Oc(24),n.mc(25,"json"),n.Yb(),n.Yb(),n.Yb(),n.Zb(26,"div",9),n.Zb(27,"mat-card"),n.Zb(28,"mat-card-title"),n.Oc(29,"Form Horizontal"),n.Yb(),n.Zb(30,"form",10),n.Zb(31,"mat-form-field"),n.Zb(32,"mat-label"),n.Oc(33,"Username"),n.Yb(),n.Ub(34,"input",11),n.Mc(35,Y,2,0,"mat-error",12),n.Yb(),n.Zb(36,"mat-form-field"),n.Zb(37,"mat-label"),n.Oc(38,"Email"),n.Yb(),n.Ub(39,"input",13),n.Mc(40,Z,2,1,"mat-error",12),n.Yb(),n.Zb(41,"mat-form-field"),n.Zb(42,"mat-label"),n.Oc(43,"Gender"),n.Yb(),n.Zb(44,"mat-select",14),n.Zb(45,"mat-option"),n.Oc(46,"-- None --"),n.Yb(),n.Zb(47,"mat-option",6),n.Oc(48,"male"),n.Yb(),n.Zb(49,"mat-option",7),n.Oc(50,"female"),n.Yb(),n.Yb(),n.Mc(51,v,2,0,"mat-error",12),n.Yb(),n.Zb(52,"mat-form-field"),n.Zb(53,"mat-label"),n.Oc(54,"City"),n.Yb(),n.Ub(55,"input",15),n.Mc(56,y,2,0,"mat-error",12),n.Yb(),n.Zb(57,"mat-form-field"),n.Zb(58,"mat-label"),n.Oc(59,"Address"),n.Yb(),n.Ub(60,"input",16),n.Mc(61,O,2,0,"mat-error",12),n.Yb(),n.Zb(62,"mat-form-field"),n.Zb(63,"mat-label"),n.Oc(64,"Company"),n.Yb(),n.Ub(65,"input",17),n.Mc(66,x,2,0,"mat-error",12),n.Yb(),n.Zb(67,"mat-form-field"),n.Zb(68,"mat-label"),n.Oc(69,"Mobile"),n.Yb(),n.Ub(70,"input",18),n.Zb(71,"mat-icon",19),n.Oc(72,"smartphone"),n.Yb(),n.Mc(73,E,2,0,"mat-error",12),n.Yb(),n.Zb(74,"mat-form-field"),n.Zb(75,"mat-label"),n.Oc(76,"Tele"),n.Yb(),n.Ub(77,"input",20),n.Zb(78,"mat-icon",19),n.Oc(79,"phone"),n.Yb(),n.Mc(80,M,2,0,"mat-error",12),n.Yb(),n.Zb(81,"mat-form-field"),n.Zb(82,"mat-label"),n.Oc(83,"Website"),n.Yb(),n.Ub(84,"input",21),n.Mc(85,C,2,0,"mat-error",12),n.Yb(),n.Zb(86,"mat-form-field"),n.Ub(87,"input",22),n.Ub(88,"mat-datepicker-toggle",23),n.Ub(89,"mat-datepicker",null,24),n.Mc(91,I,2,0,"mat-error",12),n.Yb(),n.Zb(92,"button",25),n.Oc(93,"Save"),n.Yb(),n.Yb(),n.Zb(94,"div",26),n.Oc(95),n.mc(96,"json"),n.Yb(),n.Yb(),n.Yb(),n.Zb(97,"div",27),n.Zb(98,"mat-card"),n.Zb(99,"mat-card-title"),n.Oc(100,"Form Horizontal"),n.Yb(),n.Zb(101,"form",10),n.Zb(102,"div",28),n.Zb(103,"div",29),n.Zb(104,"mat-form-field"),n.Zb(105,"mat-label"),n.Oc(106,"Username"),n.Yb(),n.Ub(107,"input",11),n.Mc(108,F,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(109,"div",29),n.Zb(110,"mat-form-field"),n.Zb(111,"mat-label"),n.Oc(112,"Email"),n.Yb(),n.Ub(113,"input",13),n.Mc(114,w,2,1,"mat-error",12),n.Yb(),n.Yb(),n.Zb(115,"div",29),n.Zb(116,"mat-form-field"),n.Zb(117,"mat-label"),n.Oc(118,"Gender"),n.Yb(),n.Zb(119,"mat-select",14),n.Zb(120,"mat-option"),n.Oc(121,"-- None --"),n.Yb(),n.Zb(122,"mat-option",6),n.Oc(123,"male"),n.Yb(),n.Zb(124,"mat-option",7),n.Oc(125,"female"),n.Yb(),n.Yb(),n.Mc(126,P,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(127,"div",29),n.Zb(128,"mat-form-field"),n.Zb(129,"mat-label"),n.Oc(130,"City"),n.Yb(),n.Ub(131,"input",15),n.Mc(132,q,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(133,"div",29),n.Zb(134,"mat-form-field"),n.Zb(135,"mat-label"),n.Oc(136,"Address"),n.Yb(),n.Ub(137,"input",16),n.Mc(138,N,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(139,"div",29),n.Zb(140,"mat-form-field"),n.Zb(141,"mat-label"),n.Oc(142,"Company"),n.Yb(),n.Ub(143,"input",17),n.Mc(144,T,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(145,"div",29),n.Zb(146,"mat-form-field"),n.Zb(147,"mat-label"),n.Oc(148,"Mobile"),n.Yb(),n.Ub(149,"input",18),n.Zb(150,"mat-icon",19),n.Oc(151,"smartphone"),n.Yb(),n.Mc(152,S,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(153,"div",29),n.Zb(154,"mat-form-field"),n.Zb(155,"mat-label"),n.Oc(156,"Tele"),n.Yb(),n.Ub(157,"input",20),n.Zb(158,"mat-icon",19),n.Oc(159,"phone"),n.Yb(),n.Mc(160,A,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(161,"div",29),n.Zb(162,"mat-form-field"),n.Zb(163,"mat-label"),n.Oc(164,"Website"),n.Yb(),n.Ub(165,"input",21),n.Mc(166,k,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Zb(167,"div",29),n.Zb(168,"mat-form-field"),n.Ub(169,"input",22),n.Ub(170,"mat-datepicker-toggle",23),n.Ub(171,"mat-datepicker",null,30),n.Mc(173,U,2,0,"mat-error",12),n.Yb(),n.Yb(),n.Yb(),n.Zb(174,"button",25),n.Oc(175,"Save"),n.Yb(),n.Yb(),n.Zb(176,"div",26),n.Oc(177),n.mc(178,"json"),n.Yb(),n.Yb(),n.Yb(),n.Yb()),2&e){const e=n.Bc(90),a=n.Bc(172);n.Eb(8),n.rc("ngModel",t.q.username),n.Eb(2),n.rc("ngModel",t.q.email),n.Eb(4),n.rc("ngModel",t.q.gender),n.Eb(10),n.Pc(n.nc(25,32,t.q)),n.Eb(6),n.rc("formGroup",t.reactiveForm1),n.Eb(5),n.rc("ngIf",t.reactiveForm1.get("username").invalid),n.Eb(5),n.rc("ngIf",t.reactiveForm1.get("email").invalid),n.Eb(11),n.rc("ngIf",t.reactiveForm1.get("gender").invalid),n.Eb(5),n.rc("ngIf",t.reactiveForm1.get("city").invalid),n.Eb(5),n.rc("ngIf",t.reactiveForm1.get("address").invalid),n.Eb(5),n.rc("ngIf",t.reactiveForm1.get("company").invalid),n.Eb(7),n.rc("ngIf",t.reactiveForm1.get("mobile").invalid),n.Eb(7),n.rc("ngIf",t.reactiveForm1.get("tele").invalid),n.Eb(5),n.rc("ngIf",t.reactiveForm1.get("website").invalid),n.Eb(2),n.rc("matDatepicker",e),n.Eb(1),n.rc("for",e),n.Eb(3),n.rc("ngIf",t.reactiveForm1.get("date").invalid),n.Eb(4),n.Pc(n.nc(96,34,t.reactiveForm1.value)),n.Eb(6),n.rc("formGroup",t.reactiveForm2),n.Eb(7),n.rc("ngIf",t.reactiveForm2.get("username").invalid),n.Eb(6),n.rc("ngIf",t.reactiveForm2.get("email").invalid),n.Eb(12),n.rc("ngIf",t.reactiveForm2.get("gender").invalid),n.Eb(6),n.rc("ngIf",t.reactiveForm2.get("city").invalid),n.Eb(6),n.rc("ngIf",t.reactiveForm2.get("address").invalid),n.Eb(6),n.rc("ngIf",t.reactiveForm2.get("company").invalid),n.Eb(8),n.rc("ngIf",t.reactiveForm2.get("mobile").invalid),n.Eb(8),n.rc("ngIf",t.reactiveForm2.get("tele").invalid),n.Eb(6),n.rc("ngIf",t.reactiveForm2.get("website").invalid),n.Eb(3),n.rc("matDatepicker",a),n.Eb(1),n.rc("for",a),n.Eb(3),n.rc("ngIf",t.reactiveForm2.get("date").invalid),n.Eb(4),n.Pc(n.nc(178,36,t.reactiveForm2.value))}},directives:[c.a,l.c,l.a,m.a,m.j,o.y,o.r,o.s,b.b,d.b,o.c,o.q,o.t,b.f,s.a,p.n,u.b,o.k,o.i,o.w,f.o,o.u,g.a,b.h,h.b,h.d,h.a,l.d,b.a],pipes:[f.h],encapsulation:2}),e})();var R=a("LRne"),L=a("lJxs"),G=a("3E0/"),z=a("tk/3");let Q=(()=>{class e{constructor(e){this.http=e}getGithubAccounts(e=null){return e?this.http.get(`https://api.github.com/search/users?q=${e}`).pipe(Object(L.a)(e=>e.items)):Object(R.a)([])}getAlbums(){return this.http.get("https://jsonplaceholder.typicode.com/albums")}getPhotos(){return this.http.get("https://jsonplaceholder.typicode.com/photos")}getPeople(e=null){let t=[{id:"5a15b13c36e7a7f00cf0d7cb",index:2,isActive:!0,picture:"http://placehold.it/32x32",age:23,name:"Karyn Wright",gender:"female",company:"ZOLAR",email:"karynwright@zolar.com",phone:"+1 (851) 583-2547"},{id:"5a15b13c2340978ec3d2c0ea",index:3,isActive:!1,picture:"http://placehold.it/32x32",age:35,name:"Rochelle Estes",disabled:!0,gender:"female",company:"EXTRAWEAR",email:"rochelleestes@extrawear.com",phone:"+1 (849) 408-2029"},{id:"5a15b13c663ea0af9ad0dae8",index:4,isActive:!1,picture:"http://placehold.it/32x32",age:25,name:"Mendoza Ruiz",gender:"male",company:"ZYTRAX",email:"mendozaruiz@zytrax.com",phone:"+1 (904) 536-2020"},{id:"5a15b13cc9eeb36511d65acf",index:5,isActive:!1,picture:"http://placehold.it/32x32",age:39,name:"Rosales Russell",gender:"male",company:"ELEMANTRA",email:"rosalesrussell@elemantra.com",phone:"+1 (868) 473-3073"},{id:"5a15b13c728cd3f43cc0fe8a",index:6,isActive:!0,picture:"http://placehold.it/32x32",age:32,name:"Marquez Nolan",gender:"male",company:"MIRACLIS",disabled:!0,email:"marqueznolan@miraclis.com",phone:"+1 (853) 571-3921"},{id:"5a15b13ca51b0aaf8a99c05a",index:7,isActive:!1,picture:"http://placehold.it/32x32",age:28,name:"Franklin James",gender:"male",company:"CAXT",email:"franklinjames@caxt.com",phone:"+1 (868) 539-2984"},{id:"5a15b13cc3b9381ffcb1d6f7",index:8,isActive:!1,picture:"http://placehold.it/32x32",age:24,name:"Elsa Bradley",gender:"female",company:"MATRIXITY",email:"elsabradley@matrixity.com",phone:"+1 (994) 583-3850"},{id:"5a15b13ce58cb6ff62c65164",index:9,isActive:!0,picture:"http://placehold.it/32x32",age:40,name:"Pearson Thompson",gender:"male",company:"EZENT",email:"pearsonthompson@ezent.com",phone:"+1 (917) 537-2178"},{id:"5a15b13c90b95eb68010c86e",index:10,isActive:!0,picture:"http://placehold.it/32x32",age:32,name:"Ina Pugh",gender:"female",company:"MANTRIX",email:"inapugh@mantrix.com",phone:"+1 (917) 450-2372"},{id:"5a15b13c2b1746e12788711f",index:11,isActive:!0,picture:"http://placehold.it/32x32",age:25,name:"Nguyen Elliott",gender:"male",company:"PORTALINE",email:"nguyenelliott@portaline.com",phone:"+1 (905) 491-3377"},{id:"5a15b13c605403381eec5019",index:12,isActive:!0,picture:"http://placehold.it/32x32",age:31,name:"Mills Barnett",gender:"male",company:"FARMEX",email:"millsbarnett@farmex.com",phone:"+1 (882) 462-3986"},{id:"5a15b13c67e2e6d1a3cd6ca5",index:13,isActive:!0,picture:"http://placehold.it/32x32",age:36,name:"Margaret Reynolds",gender:"female",company:"ROOFORIA",email:"margaretreynolds@rooforia.com",phone:"+1 (935) 435-2345"},{id:"5a15b13c947c836d177aa85c",index:14,isActive:!1,picture:"http://placehold.it/32x32",age:29,name:"Yvette Navarro",gender:"female",company:"KINETICA",email:"yvettenavarro@kinetica.com",phone:"+1 (807) 485-3824"},{id:"5a15b13c5dbbe61245c1fb73",index:15,isActive:!1,picture:"http://placehold.it/32x32",age:20,name:"Elisa Guzman",gender:"female",company:"KAGE",email:"elisaguzman@kage.com",phone:"+1 (868) 594-2919"},{id:"5a15b13c38fd49fefea8db80",index:16,isActive:!1,picture:"http://placehold.it/32x32",age:33,name:"Jodie Bowman",gender:"female",company:"EMTRAC",email:"jodiebowman@emtrac.com",phone:"+1 (891) 565-2560"},{id:"5a15b13c9680913c470eb8fd",index:17,isActive:!1,picture:"http://placehold.it/32x32",age:24,name:"Diann Booker",gender:"female",company:"LYRIA",email:"diannbooker@lyria.com",phone:"+1 (830) 555-3209"}];return e&&(t=t.filter(t=>t.name.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1)),Object(R.a)(t).pipe(Object(G.a)(500))}}return e.\u0275fac=function(t){return new(t||e)(n.dc(z.b))},e.\u0275prov=n.Pb({token:e,factory:e.\u0275fac}),e})();var D=a("ZOsW"),X=a("f0Cb");function W(e,t){if(1&e&&(n.Zb(0,"ng-option",15),n.Oc(1),n.Yb()),2&e){const e=t.$implicit;n.rc("value",e.id)("disabled",e.disabled),n.Eb(1),n.Qc(" ",e.name,"")}}function B(e,t){if(1&e&&(n.Zb(0,"b"),n.Oc(1,"create new"),n.Yb(),n.Oc(2)),2&e){const e=t.searchTerm;n.Eb(2),n.Qc(": ",e," ")}}const J=function(){return[]};let K=(()=>{class e{constructor(e){this.dataService=e,this.people=[],this.selectedPersonId="5a15b13c36e7a7f00cf0d7cb",this.selectedPersonId2="5a15b13c36e7a7f00cf0d7cb",this.selectedSimpleItem="Two",this.simpleItems=[],this.disable=!0,this.selectedCarId=3,this.cars=[{id:1,name:"Volvo"},{id:2,name:"Saab",disabled:!0},{id:3,name:"Opel"},{id:4,name:"Audi"}],this.companies=[],this.loading=!1,this.companiesNames=["Mi\u0161kas","\u017dalias","Flexigen"],this.selectedCompany="",this.selectedCompanyCustom="",this.selectedCompanyCustomPromise=""}ngOnInit(){this.people$=this.dataService.getPeople(),this.dataService.getPeople().subscribe(e=>this.people=e),this.simpleItems=[!0,"Two",3],this.companiesNames.forEach((e,t)=>{this.companies.push({id:t,name:e})})}toggleDisabled(){const e=this.cars[1];e.disabled=!e.disabled}addTag(e){return{name:e,tag:!0}}addTagPromise(e){return new Promise(t=>{this.loading=!0,setTimeout(()=>{t({id:5,name:e,valid:!0}),this.loading=!1},1e3)})}}return e.\u0275fac=function(t){return new(t||e)(n.Tb(Q))},e.\u0275cmp=n.Nb({type:e,selectors:[["app-forms-selects"]],features:[n.Db([Q])],decls:67,vars:43,consts:[["fxLayout","row wrap",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","50",1,"matero-col"],["bindLabel","name","bindValue","id","autofocus","","placeholder","select person",3,"items","ngModel","ngModelChange"],["inset","",1,"m-y-16"],["bindLabel","name","bindValue","id","placeholder","select person",3,"items","ngModel","ngModelChange"],[3,"items","ngModel","ngModelChange"],["type","button","mat-raised-button","","color","primary",1,"m-b-8",3,"click"],["placeholder","select car",3,"ngModel","ngModelChange"],[3,"value","disabled",4,"ngFor","ngForOf"],[3,"value"],[3,"items","addTag","ngModel","ngModelChange"],["multiple","true","bindLabel","name",3,"items","addTag","hideSelected","ngModel","ngModelChange"],["multiple","true","bindLabel","name",3,"items","addTag","loading","ngModel","ngModelChange"],["ng-tag-tmp",""],[3,"items","addTag","multiple","selectOnTab","isOpen"],[3,"value","disabled"]],template:function(e,t){1&e&&(n.Ub(0,"page-header"),n.Zb(1,"div",0),n.Zb(2,"div",1),n.Zb(3,"mat-card"),n.Zb(4,"mat-card-title"),n.Oc(5,"Data Source"),n.Yb(),n.Zb(6,"div"),n.Zb(7,"p"),n.Oc(8," Most common case is showing data from backend API and with ng-select this is extremely simple since you can bind directly to observable when using angular "),n.Zb(9,"b"),n.Oc(10," | async"),n.Yb(),n.Oc(11," pipe "),n.Yb(),n.Zb(12,"ng-select",2),n.hc("ngModelChange",(function(e){return t.selectedPersonId=e})),n.mc(13,"async"),n.Yb(),n.Oc(14),n.Ub(15,"mat-divider",3),n.Zb(16,"p"),n.Oc(17," You can also set array of objects as items input "),n.Yb(),n.Zb(18,"ng-select",4),n.hc("ngModelChange",(function(e){return t.selectedPersonId2=e})),n.Yb(),n.Oc(19),n.Ub(20,"mat-divider",3),n.Zb(21,"p"),n.Oc(22," While array of objects is the most common items source, you may want to set simple array of strings, numbers, booleans "),n.Yb(),n.Zb(23,"ng-select",5),n.hc("ngModelChange",(function(e){return t.selectedSimpleItem=e})),n.Yb(),n.Oc(24),n.mc(25,"json"),n.Ub(26,"mat-divider",3),n.Zb(27,"p"),n.Oc(28," If you have simple use case, you can omit items array and bind options directly in html using "),n.Zb(29,"b"),n.Oc(30,"ng-option"),n.Yb(),n.Oc(31," component. "),n.Yb(),n.Zb(32,"button",6),n.hc("click",(function(){return t.toggleDisabled()})),n.Oc(33,"Toggle option[1] disabled"),n.Yb(),n.Zb(34,"ng-select",7),n.hc("ngModelChange",(function(e){return t.selectedCarId=e})),n.Mc(35,W,2,3,"ng-option",8),n.Zb(36,"ng-option",9),n.Oc(37,"Custom"),n.Yb(),n.Yb(),n.Oc(38),n.mc(39,"json"),n.Yb(),n.Yb(),n.Yb(),n.Zb(40,"div",1),n.Zb(41,"mat-card"),n.Zb(42,"mat-card-title"),n.Oc(43,"Tags"),n.Yb(),n.Zb(44,"div"),n.Zb(45,"label"),n.Oc(46,"Default tags"),n.Yb(),n.Zb(47,"ng-select",10),n.hc("ngModelChange",(function(e){return t.selectedCompany=e})),n.Yb(),n.Zb(48,"p"),n.Oc(49),n.mc(50,"json"),n.Yb(),n.Ub(51,"mat-divider",3),n.Zb(52,"label"),n.Oc(53,"Custom tags"),n.Yb(),n.Zb(54,"ng-select",11),n.hc("ngModelChange",(function(e){return t.selectedCompanyCustom=e})),n.Yb(),n.Zb(55,"p"),n.Oc(56),n.mc(57,"json"),n.Yb(),n.Ub(58,"mat-divider",3),n.Zb(59,"label"),n.Oc(60,"Server side tags"),n.Yb(),n.Zb(61,"ng-select",12),n.hc("ngModelChange",(function(e){return t.selectedCompanyCustomPromise=e})),n.Mc(62,B,3,1,"ng-template",13),n.Yb(),n.Ub(63,"mat-divider",3),n.Zb(64,"label"),n.Oc(65,"Tagging without dropdown. Press enter to add item"),n.Yb(),n.Ub(66,"ng-select",14),n.Yb(),n.Yb(),n.Yb(),n.Yb()),2&e&&(n.Eb(12),n.rc("items",n.nc(13,31,t.people$))("ngModel",t.selectedPersonId),n.Eb(2),n.Qc(" Selected: ",t.selectedPersonId," "),n.Eb(4),n.rc("items",t.people)("ngModel",t.selectedPersonId2),n.Eb(1),n.Qc(" Selected: ",t.selectedPersonId2," "),n.Eb(4),n.rc("items",t.simpleItems)("ngModel",t.selectedSimpleItem),n.Eb(1),n.Qc(" Selected: ",n.nc(25,33,t.selectedSimpleItem)," "),n.Eb(10),n.rc("ngModel",t.selectedCarId),n.Eb(1),n.rc("ngForOf",t.cars),n.Eb(1),n.rc("value","custom"),n.Eb(2),n.Qc(" Selected car ID: ",n.nc(39,35,t.selectedCarId)," "),n.Eb(9),n.rc("items",n.uc(41,J))("addTag",!0)("ngModel",t.selectedCompany),n.Eb(2),n.Qc(" Selected value: ",n.nc(50,37,t.selectedCompany)," "),n.Eb(5),n.rc("items",t.companies)("addTag",t.addTag)("hideSelected",!0)("ngModel",t.selectedCompanyCustom),n.Eb(2),n.Qc(" Selected value: ",n.nc(57,39,t.selectedCompanyCustom)," "),n.Eb(5),n.rc("items",t.companies)("addTag",t.addTagPromise)("loading",t.loading)("ngModel",t.selectedCompanyCustomPromise),n.Eb(5),n.rc("items",n.uc(42,J))("addTag",!0)("multiple",!0)("selectOnTab",!0)("isOpen",!1))},directives:[c.a,l.c,l.a,m.a,m.j,D.a,o.q,o.t,X.a,u.b,f.n,D.d,D.c],pipes:[f.b,f.h],encapsulation:2}),e})();var H=a("5eHb"),V=a("0FS3");const $=[{path:"elements",component:j,data:{title:"Form Elements"}},{path:"ng-select",component:K,data:{title:"Ng Select"}},{path:"dynamic",component:(()=>{class e{constructor(e){this.toastr=e,this.form=new o.j({}),this.model={email:"email@gmail.com"},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"Type here to see the other field become enabled..."}},{key:"text2",type:"input",templateOptions:{label:"Hey!",placeholder:"This one is disabled if there is no text in the other input"},expressionProperties:{"templateOptions.disabled":"!model.text"}},{key:"email",type:"input",templateOptions:{label:"Email address",placeholder:"Enter email",required:!0}}],this.form2=new o.j({}),this.model2={},this.options={},this.fields2=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-sm-6",type:"input",key:"firstName",templateOptions:{label:"First Name"}},{className:"col-sm-6",type:"input",key:"lastName",templateOptions:{label:"Last Name"},expressionProperties:{"templateOptions.disabled":"!model.firstName"}}]},{fieldGroupClassName:"row",fieldGroup:[{className:"col-sm-6",type:"input",key:"street",templateOptions:{label:"Street"}},{className:"col-sm-3",type:"input",key:"cityName",templateOptions:{label:"City"}},{className:"col-sm-3",type:"input",key:"zip",templateOptions:{type:"number",label:"Zip",max:99999,min:0,pattern:"\\d{5}"}}]},{type:"textarea",key:"otherInput",templateOptions:{label:"Other Input"}},{type:"checkbox",key:"otherToo",templateOptions:{label:"Other Checkbox"}}]}ngOnInit(){}submit(){this.showToast(this.model)}submit2(){this.showToast(this.model2)}showToast(e){this.toastr.success(JSON.stringify(e))}}return e.\u0275fac=function(t){return new(t||e)(n.Tb(H.b))},e.\u0275cmp=n.Nb({type:e,selectors:[["app-forms-dynamic"]],decls:15,vars:10,consts:[[3,"formGroup","ngSubmit"],[3,"form","fields","model"],["mat-raised-button","","color","primary"],[3,"model","fields","options","form"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&(n.Ub(0,"page-header"),n.Zb(1,"mat-card"),n.Zb(2,"mat-card-title"),n.Oc(3,"Simple"),n.Yb(),n.Zb(4,"form",0),n.hc("ngSubmit",(function(){return t.submit()})),n.Ub(5,"formly-form",1),n.Zb(6,"button",2),n.Oc(7,"Submit"),n.Yb(),n.Yb(),n.Yb(),n.Zb(8,"mat-card"),n.Zb(9,"mat-card-title"),n.Oc(10,"Advanced Layout"),n.Yb(),n.Zb(11,"form",0),n.hc("ngSubmit",(function(){return t.submit2()})),n.Ub(12,"formly-form",3),n.Zb(13,"button",4),n.Oc(14,"Submit"),n.Yb(),n.Yb(),n.Yb()),2&e&&(n.Eb(4),n.rc("formGroup",t.form),n.Eb(1),n.rc("form",t.form)("fields",t.fields)("model",t.model),n.Eb(6),n.rc("formGroup",t.form2),n.Eb(1),n.rc("model",t.model2)("fields",t.fields2)("options",t.options)("form",t.form2),n.Eb(1),n.rc("disabled",!t.form2.valid))},directives:[c.a,m.a,m.j,o.y,o.r,o.k,V.e,u.b],encapsulation:2}),e})(),data:{title:"Dynamic Form"}}];let _=(()=>{class e{}return e.\u0275mod=n.Rb({type:e}),e.\u0275inj=n.Qb({factory:function(t){return new(t||e)},imports:[[i.i.forChild($)],i.i]}),e})();a.d(t,"FormsModule",(function(){return ee}));let ee=(()=>{class e{}return e.\u0275mod=n.Rb({type:e}),e.\u0275inj=n.Qb({factory:function(t){return new(t||e)},imports:[[r.a,_]]}),e})()}}]);