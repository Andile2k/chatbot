function talk(){
    var know = {
        "Hello" : "Hi there!",
        "Who are you?" : "My name is Elijah ",
        "How are you?" : " I am good :-",
        "What can i do for you?" : "Give us a follow and like!",
        "Your followers?" : "I have 100 likes, no followers yet",
        "okay" : "Thanks for the convo",
        "Bye" : "OKAY! We will meet soon,was nice chatting with you",
    }
    var user = document.getElementById('userBox').value;
    document.getElementById('ChatLog').innerHTML = user + "<br>";

    if(user in know){
        document.getElementById('ChatLog').innerHTML = know[user] + "<br>"

    } else{
        document.getElementById('ChatLog').innerHTML = 
        "Sorry I didnt understand <br>"
    }
}