var peachuser;
peachuser= {"fullname" : " " };

var peach = {"state":'0',
             "greeting": [
                {
                "question" : "Hello i am Peach, what is your name?",  // Peach UI askes
                "answerType"  : "string", // string || button
                "answerContent" : "Firstname Lasname", // Peach UI Answer Element Labeltext || button's intro
                "userResponse" : "", // user text storage init empty || button's label
                "ResponseAction" : "saveResponse();return false;" // onclick Function Array || set value id
                },
                {
                "question" : "Hello "+peachuser.fullname+" what can I help you with?",  // Peach UI askes
                "answerType"  : "button", // string || button
                "answerContent" : "I have a case regarding ...",
                "userResponse" : ["Labor law", "Family law", "Traffic law"],
                "userResponseAction" : ["laborlaw", "familylaw", "trafficlaw"]
                }
            ] // End "greeting"
            };

function nextstep() {
    
    if (peachi != undefined) {
        peachi = peachi;
    } else {
        var peachi = 0;
    }

    $('#question').append(peach.greeting[peachi].question);
    $('#question').append(peach.greeting[peachi].ResponseAction);
    
    if (peach.greeting[peachi].answerType=="string") {
        
        var htmlresponse = '<div class="ui fluid input focus"><input type="bottom attached fluid text" id="response"><button class="ui teal icon button"><i class="ui big chevron circle right icon"></i></button></div>';
        
        } else if(peach.greeting[0].answerType=="button") {
            
            var arrf = peach.greeting[0].answerType;
                for (i = 0; i < arrf.length; i++) { 
                    $('img.image').attr(arrf[i], 'return false');
                }
                for (i = 0; i < arrf.length; i++) { 
                    $('.cpricolb').attr(arrf[i], 'return false');
                }
        var htmlresponse = 
        }
    
    .attr('onclick', '');
    ResponseAction

 $('#answer').append(htmlresponse);
 $('#response').attr('placeholder', 'Firstname Lastname');
            
        $('#question').append(peach.greeting[0].answerContent);
}
    
nextstep();
    







function saveResponse() {
    switch (peach.state) { 
    case '0':
		peachuser.fullname = $('#response').val();
        $('#clientname').append(peachuser.fullname);
        return false;
		break;
    case '1':
        return false;
		break;
    case '2':
        return false;
		break;
    }
    peach.state++;
    return false;
    
}

onclick="peachtopic(laborlaw)";

function getlaborlaw(){
    return
}



$(document).keypress(function(e) {
    if (e.which == "13") { 
        
    }       
});


peachtopic('laborlaw/noticeprotection');

function peachtopic(isofname) {
    
    var navButtonGroup = '<button class="ui right floated ui icon button" onclick="cbtn(\'share\');" id="btnshare"><img class="ui mini circular image" src="/corelaio.new/media/btn-share.svg"></button> <button class="ui right floated ui icon button" onclick="cbtn(\'contact\')" id="btncontact"><img class="ui mini circular image" src="/corelaio.new/media/btn-contact.svg"></button> <button class="ui right floated ui icon button" onclick="cbtn(\'menu\')" id="btnmenu"><img class="ui mini circular image" src="/corelaio.new/media/btn-menu.svg"></button>';
    ///** TBD Semaint ui button elements

    switch (isofname) { 
	case 'laborlaw':
		var prepeach = {varprepeachtopic:isofname};
		break;
    case 'familylaw':
		alert(alertcomment+isofname);
		break;
    case 'trafficlaw':
		alert(alertcomment+isofname);
		break;
    }
    console.log(isofname);
    prepeach
    
}

function peachpackage(isofname) {
    var alertcomment = "Please give us a call to schedule a meeting for your inquiry about";
    
    switch (isofname) { 
	case 'laborlaw/noticeprotection':
		var prepeach = {varprepeachtopic:isofname};
		break;
    case 'laborlaw/parttime':
		alert(alertcomment+isofname);
		break;
    case 'laborlaw/leaveentitlement':
		alert(alertcomment+isofname);
		break;
    case 'familylaw/matrimonialagreement':
		alert(alertcomment+isofname);
		break;
    case 'familylaw/divorce':
		alert(alertcomment+isofname);
		break;
    case 'familylaw/alimony':
		alert(alertcomment+isofname);
		break;
    case 'trafficlaw/trafficaccident':
		alert(alertcomment+isofname);
		break;
    case 'trafficlaw/lossoflicense':
		alert(alertcomment+isofname);
		break;
    case 'trafficlaw/insuranceclaims':
		alert(alertcomment+" "+isofname);
		break;
    }
    console.log(isofname);
    
}



//** load functionality

var prepeach = {url:"/peach.new/js/", file:"/peach.json"};

var peachfile = url+topic+file;

$.getScript(peachfile);
