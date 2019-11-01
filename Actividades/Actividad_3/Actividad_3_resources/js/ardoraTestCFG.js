//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#DB1FE0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que  etiqueta define un salto de linea en una pagina web?","Esta etiqueta define una seccion en un documento .","Este sistema permite registrar los cambios realizados sobre un archivo o conjunto de archivos  a lo largo del tiempo , de tal manera que sea posible  recuperar  versiones  especificas mas adelante."];
var answers1=["MUJy","MERy","MENy","MEZy"];
var answers2=["MURpdg","MFZpZA","MERs","MER0"];
var answers3=["MUNvbnRyb2wgZGUgdmVyc2lvbmVz","MFJlcG9zaXRvcmlvcw","MFBhZ2luYXMgd2Vi","MFNpc3RlbWEgZGUgaW5mb3JtYWNp824"];
var ans=[answers1,answers2,answers3];
var err=["Incorrecto","Incorrecto","Incorrecto"];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_3_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
