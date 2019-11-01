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
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#DF20DB";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="muy bien"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QW50aXZpZGFkXzE"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que etiqueta define el pie de pagina en HTML5?","¿Como se definen los encabezados o titulos en una pagina web?","¿Que etiqueta define un estilo para la información de un documento?","Esta etiqueta define una imagen en una pagina web"];
var answers1=["MUZvb3Rlcg","MGhlYWQ","MGZvcm0"];
var answers2=["MUgx","MUg2","MFA","ME9iamV0","MFByZQ"];
var answers3=["MVN0eWxl","MFN0cm9uZw","MFNtYWxs","MFN1Yg"];
var answers4=["MUltZw","MElucw","MExp","ME1hcA"];
var ans=[answers1,answers2,answers3,answers4];
var err=["respuesta incorrecta","respuesta incorrecta","Respuesta incorrecta","Respuesta incorrecta"];
var ima=["","","",""];
var mp4=["","","",""];
var ogv=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Antividad_1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
