//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="correcto"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Mediante esta etiqueta se define un hipervinculo","Mediante el uso de esta etiqueta podemos definir el contenido lateral del contenedor de una pagina.","Nombre de un contenedor de versiones","Esta etiqueta nos permite definir un texto en negrita en una pagina web"];
var answers1=["MUE","MEY","MEQ","MEI"];
var answers2=["MUFzaWRl","MEJvZHk","MEFiYnI","MEFydGljbGU"];
var answers3=["MUdJVEhVQg","MENTUw","MEhUTUw","MEJETw"];
var answers4=["MUI","MEE","MEM","MEQ"];
var ans=[answers1,answers2,answers3,answers4];
var err=["Incorrecto","Incorrecto","Incorrecto","Incorrecto"];
var ima=["","","",""];
var mp4=["","","",""];
var ogv=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_2_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
