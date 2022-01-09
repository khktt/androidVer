var test={
    sendEmail(subject,to,body){
        
        // SmtpJS.com - v3.0.0 

        //9ef65483-195a-440b-888f-24c20701e5dd
        let Email = { 
            send: function (a) { 
                return new Promise(function (n, e) { 
                    a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; 
                    var t = JSON.stringify(a); 
                    Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) 
                }) 
            }, 
            ajaxPost: function (e, n, t) { 
                var a = Email.createCORSRequest("POST", e); 
                a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
                a.onload = function () { 
                    var e = a.responseText; 
                    null != t && t(e) }, 
                    a.send(n) 
                }, 
            ajax: function (e, n) { 
                var t = Email.createCORSRequest("GET", e); 
                t.onload = function () { 
                    var e = t.responseText; 
                    null != n && n(e) 
                }, 
                t.send() 
            }, 
            createCORSRequest: function (e, n) { 
                var t = new XMLHttpRequest; 
                return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    
        var emailU = "manalearn530@gmail.com";
        var pass = "aptx3561"

        /*Email.send({
            Host : "https://mail.google.com/",
            Username : emailU,
            Password : pass,
            To : 'nhtienlam@gmail.com',
            From : "ManaLearn",
            Subject : "This is the subject",
            Body : "And this is the body"
          }).then(
          message => console.log(message)
          );*/

          Email.send({
            SecureToken : "28fa4b51-3084-4887-95f2-eef7ea81f09a",
            //Host : "smtp.gmail.com",
            //Username : emailU,
            //Password : pass,
            Port: 587,
            To : 'nhtienlam@gmail.com',
            From : emailU,
            Subject : "This is the subject",
            Body : "And this is the body"
            
        }).then(
            message => console.log(message)
        );
        
    }
    }
export default test;