var audio = new Audio('assets/sentmessage.mp3');

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/@31.2612091,75.7023154,16z' class='map'></iframe></div><label class='add'><address>B2 'Chaheru'<br>Phagwara<br>Punjab, INDIA.</address>";function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Gopi Krishna</a>.</span><br><br>I am a Computer Engineering student at <span class='bold'>Lovely Professional University💻</span><br><br>I am eager to hear about potential career opportunities, so I would be doing real time projects to give better user experiences with my skills.<br><br>Send <span class='bold'>'help'</span> to know more about this chatbot.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about this...<br>e.g<br><span class='bold'>'placementresources'</span> - to get the placement related resources<br><span class='bold'>'interviewquestions'</span> - to get the interview question resources<br><span class='bold'>'technologies'</span> - to get the technology resources<br><span class='bold'>'sdesheets'</span> - to get all sde sheets<br><span class='bold'>'cseebooks'</span> - to get the ebooks<br><span class='bold'>'pbctaggedquestions'</span> - to get the pbc tagged questions<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'github'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;    
            
        case "placementresources":
            sendTextMessage("Select only one ...<br><br>(type name as it is..) <br><br>1. aptitude<br>2. sampleresumes<br>3. sdeinterviewguide<br>4. softskills<br>5. topsitesforeducation<br><br>");
            break;    
        case "topsitesforeducation":
            sendTextMessage(" click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1A0830S82AD99Ts6DbZaVKleHzgKkvkec?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;         
        case "softskills":
            sendTextMessage(" click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1lhCyUBv6JO6Fi2iBV4fH47q-vRMKEfeU?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;         
        case "sdeinterviewguide":
            sendTextMessage("click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1u8zuYTsRc1gpG9H6kbKSZKKUsJDkYZjh?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;         
        case "sampleresumes":
            sendTextMessage("click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1iGt83p5MHdIgB_BYU2a-lblcLccYKiOn?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "aptitude":
            sendTextMessage("click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/14Q_zEwfaVr2l1r5xpxDYVPObaKDU_izd?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break; 
            
            
            
            
        case "interviewquestions":
            sendTextMessage("Select only one subject <br><br>(type subject name as it is..) <br><br>1. dbmsandsql<br>2. dsa<br>3. java<br>4. linux<br>5. python<br><br>");
            break;        
        case "python":
            sendTextMessage(" click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1HukzIXgnFB1UZAaMkhA0n6DxtpDvjeUc?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;         
        case "linux":
            sendTextMessage(" click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1XCCU-Vz8ngc0Tkiyj6B1SngrQTEa7jah?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;         
        case "dsa":
            sendTextMessage(" click hereclick here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1iefE6-41zv7WK-UK_UpPBOTfyTmA1WiA?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "java":
            sendTextMessage("click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1klekFK9DcjLGgy2KG8ksEigbScL6U5TR?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "dbmsandsql":
            sendTextMessage(" click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/10f43zI7kV4DNJkwzo8MT8UMUMeOdFy7O?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break; 
            
            
            
        case "technologies":
            sendTextMessage("Select only one technology <br><br>(type technology name as it is..) <br><br>1. angular<br>2. ai<br>3. blockchaintechnology<br>4. cloudcomputing<br>5. devops<br>6. flutter<br>7. gitandgithub<br>8. webdevelopment<br><br>");
            break;        
        case "webdevelopment":
            sendTextMessage(" click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1nxLjATVgwzZrYG8PmMJJ1BM-o4s023qf?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "gitandgithub":
            sendTextMessage("  click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/196GI96m9geJdcmYuLtYPGy_2iJpsRfTB?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "devops":
            sendTextMessage(" click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1bRAJ09N-_JQnjfEO1ehaX99QuRW50saK?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "cloudcomputing":
            sendTextMessage(" click here click here click here click here click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1lWR-GtIsz8O1sGpomnrtY6KSYCBQDVsX?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "blockchaintechnology":
            sendTextMessage(" click here click here click here click here <br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1DjzBCUoRnBfJEiEgRqUS7QhV9FU13nEi?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "flutter":
            sendTextMessage("  click here click here click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1FoZ2Pj0rEHhzf2oTVsAAyC37ZydqGk-0?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "ai":
            sendTextMessage("  click here click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/14gsyRPmo5wm1nPzZ62CvrqBZZl3diHk0?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "angular":
            sendTextMessage("  click here<br><br><div class='social'><a target='_blank' href='https://drive.google.com/drive/folders/1ENH7gjrKWwPjNkK17WCLvPPJkDTvuDUl?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
            
            
            
        case "cseebooks":
            sendTextMessage("all cse ebooks are in pdf format <br><br>(type book name as it is..) <br><br>1. cebook<br>2. c++<br>3. css<br>4. html<br>5. java<br>6. javascript<br>7. kotlin<br>8. python<br>9. reactjs<br>swift<br><br>");
            break;
        case "swift":
            sendTextMessage("click this one <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1BHheUCFxDDXmQ0IK0oVD57lbmp7aNXPR/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "reactjs":
            sendTextMessage("click this one <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1Zvvmrce8oe5UVWda2R-sBHvIDzZc2_lC/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "python":
            sendTextMessage("click this one  <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1nbrmHolPl6Tb4SvZQ0HzAadN1zsiQsn6/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "kotlin":
            sendTextMessage("sclick this one  <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1K1WjzThd7vBV6ROdSflcgdLuS_0HbpBH/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "javascript":
            sendTextMessage("click this one  <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/13TpJMqRsUUYTndzFYNVAoG3FcCOYOeAw/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "java":
            sendTextMessage("click this one  <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1EB_dkrDTHr2ud-PwhdYxdhRHbiuxDhww/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "html":
            sendTextMessage("click this one <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1lgWfbpt7zgoHXwHUPp-tNBxkBqHWEGU2/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "css":
            sendTextMessage("css <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1wkoVxhhpTbKavk5NhgWnOZIPWMCQVs8l/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;        
        case "c++":
            sendTextMessage("c++ <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1QBZt6ahN97vA7_kumFB58H4ZfFht9Wsn/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "cebook":
            sendTextMessage("c <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1ra8XIHlG7-PJrfrJ87hKGdp4oMi57XQk/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        



        case "sdesheets":
            sendTextMessage("<span class='sk'>Select the SDE Sheet(type in alphabets..)</span><br><br> pick up only one :<br>a. Striver<br>b. Lovebabar<br>c. Siddhartha Singh<br>d. Code skool<br>e. Adobe sde sheet<br>f. Shradha Didi and Aman Bhaiya<br>g.Arsh sheet<br>h. Thriver ashish sheet");
            break;
        case "a":
            sendTextMessage("striver <br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/10YVppeCrnGiBlfNabpzxbQqWajhwa29a/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "b":
            sendTextMessage("lovebabar<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1Gp8bHgFlXLGQUbLNB1O9yVuy_BPze9q_/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "c":
            sendTextMessage(".<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1iD8hjX3TPlrVJrkTucJhE6idC81N89FM/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "d":
            sendTextMessage(".<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/16gXB7vyFcu6mFg0D2tK3Jvh7oKtOozRA/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "e":
            sendTextMessage(".<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1J8tHqsv0Cm-tHTBpql55AkJLDezPf_Ag/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "f":
            sendTextMessage(".<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1YKazyhA30se3duevzJ2gziV-vY5zR5SW/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "g":
            sendTextMessage("Arsh<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1d4W4QxwMu_-FoA6aESV2q-KTpqGJxXru/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "h":
            sendTextMessage("thriver ashish<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1ynfg1Y5ZtjAl7lHlOAQfcT-OJWc88nnz/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
            


        case "pbctaggedquestions":
            sendTextMessage("Select only one company(type company name as it is...)<br><br>1. adobe<br>2. uber<br>3. bloomberg<br>4. amazon<br>5. apple<br>6. deshaw<br>7. directi<br>8. expedia<br>9. facebook<br>10. goldmansachs<br>11. google<br>12. intuit<br>13. jpmorgan<br>14. linkedin<br>15. microsoft<br>16. oracle<br>17. samsung<br>18. twitter<br>19. uber<br>20. visa<br>21. vmware<br>22. walmart<br>");
            break;
        case "walmart":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1p2N4GOBe0wT5q7jn5JmhYBwIu3AFqBk3/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "vmware":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/11wfieIFnWf7wBQyHagGmVlyI6OL5VsyI/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "visa":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1UH7gpGEO9DAJh_0wtMPGid0-fKnNnjtu/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "uber":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1djiB0gl-cicr6DHK2e2qSsRl6Ikgpx-z/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "twitter":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1vO3Au4qujcyLdETqt3wpNaR9WRwmvWel/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "samsung":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/10ZgjfvftkNYxaVueYCIOUt3RX3k8U6Ae/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "oracle":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1o8GL03x6bNgE8J-jyiyPVkekkITVmlgj/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "microsoft":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1CY5MVQQhioXrZO7nV6fPal3HL0-7KQlF/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "linkedin":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1iZww3ACsrz5FLomA0cim362UAHU5c9SY/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "jpmorgan":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1DBRdxxAcaN2-x6aaJb5BMjwlVrjX2VpC/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "intuit":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1_scrCk5sEOMb8gqdrCEN3HPT08jpWmxQ/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "google":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1LJo7AQRS0NOJLf6oEslxYkqObftCRMHz/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "goldmansachs":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1hB8D6l91dlVKw7ozuQa19i44IGLY9ozH/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "facebook":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1CBMqysEOi1UbmU5aNKmZr953bc1uuvUx/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "expedia":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1XnX0u3bde9p16oA_b0sn1pshcZSA0Vy7/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "directi":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1lmsRrrI1f-ovWmSwJdFNoJai637On1_E/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "deshaw":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1PoFKKFU2AFw9rBJcdN8_6_RWw5AAY6fG/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "apple":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1J628L4ZDI-tq3xr55LT9TrGyBoQKhRi2/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "amazon":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1UmcQLu0pqARm-IQydqJnqSK2T5Dhj7r0/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "bloomberg":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1Z_nkLlDgpNqnxFXHFjJtb0KhDN-cD3nP/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "uber":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1Z_nkLlDgpNqnxFXHFjJtb0KhDN-cD3nP/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;
        case "adobe":
            sendTextMessage("<br><br><div class='social'><a target='_blank' href='https://drive.google.com/file/d/1_X9VlhG7YujY8CmJrWAg0WzgO8K3zPdc/view?usp=share_link'> <div class='socialItem'><img class='socialItemI' alt=''></div> </a></div>");
            break;








        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻Built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 <a class='alink' target='_blank' href='https://www.linkedin.com/in/gopi76/'><span class='bold'>Gopi Krishna</a></span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "github":
            sendTextMessage("you can check my github for reference for projects (*if you need)<br><br><div class='social'><a target='_blank' href='https://github.com/gopi76'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage of this chatbot.... .And remember one thing this is a rule based chatbot not a conversional chatbot... ");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
