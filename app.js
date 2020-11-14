    var x;
    var y;
    var am = ["enough","worthy","capable","in control","necessary","proud of myself","deserving","valid","loved","valued","powerful",
  "appreciated","irreplaceable","intelligent","important"];
    var believe = ["in myself","I deserve love","that my dreams are valid","in celebrating myself","I deserve respect","in my personal autonomy","in my strength","everything will be okay","I deserve peace",
    "in my intuitions","my pain is temporary","I deserve happiness","I deserve success","I am here for a reason","today will be a great day"];
    var will = ["succeed","take up space","make it through the day","prosper","conquer my fears","never quit","lead my own journey","demand respect","be intentional","be purposeful","be there for myself",
    "allow imperfection","accomplish any goal","not let others define me","become a better person"];

    function format1Select(){
        x = document.getElementsByClassName("formats")[0];
        y = document.getElementsByClassName("nav")[0];
        y.innerHTML = x.innerHTML + " +";
    }

    function format2Select(){
        x = document.getElementsByClassName("formats")[1];
        y = document.getElementsByClassName("nav")[0];
        y.innerHTML = x.innerHTML + " +";
    }

    function format3Select(){
        x = document.getElementsByClassName("formats")[2];
        y = document.getElementsByClassName("nav")[0];
        y.innerHTML = x.innerHTML + " +";
    }

    function generate() {
        let i = document.getElementsByTagName("h1")[0];
        if (x == document.getElementsByClassName("formats")[0]) {
           format1 = "I am";
        //get random value from list
            i.innerHTML = format1 + " " + am[Math.floor(Math.random()*am.length)] + ".";
        } else if (x == document.getElementsByClassName("formats")[1]) {
           format2 = "I believe";
        //get random value from list
           i.innerHTML = format2 + " " + believe[Math.floor(Math.random()*believe.length)] + ".";
        } else {
           format3 = "I will" + " " + will[Math.floor(Math.random()*will.length)] + ".";
        //get random value from list
           i.innerHTML = format3;
        }
    }

    $(document).ready(function(){
        $(".hide").hide();
        $(".show").click(function(){
        $(this).next(".hide").slideToggle('fast');
        }); });