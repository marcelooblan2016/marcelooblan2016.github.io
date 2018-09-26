var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    console.log("EFFECT PLUGIN INITIATED");
    m.timeouts = [];
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Keep Moving Forward.',
      'Time will not stop for you.',
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      // setTimeout(m.animateIn, 20);
      m.beepStyle(3);
    } else { 
      m.beepStyle(4);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;

      }
    }

    $(el).html(message);
    var type = 1;
    if(do_cycles == true){
        type = 1;
    } else {
        type = 2;
    }
    m.beepStyle(type);
  };
  m.delay = function(){
        $(el).animate({ opacity: 0 }, 3000, function(){
            setTimeout(m.cycleText, 1000);

        });
  }
  m.beepStyle = function(type){
        //3,4,1,2,5
        switch(type){
            default:
            case 1:
                $(el).css({"opacity" : "1"});
                 setTimeout(m.animateFadeBuffer, 50);
            break;
            case 2:
                 //$(el).css({"opacity" : "0"});
                 setTimeout(m.delay, 2000);
            break;
            case 3:
                $(el).css({
                        "opacity" : "1",
                        // "color" : 'inherit'
                    });
                // $(el).animate({ opacity: 0 }, 1000, function(){
                    setTimeout(m.animateIn, 20);
                // });
            break;
            case 4:
                $(el).css({"opacity" : 1});
                setTimeout(m.animateFadeBuffer, 20);
                
            break;
            case 5:
                // $(el).css({"color" : "blue"});

                //$(el).animate({ opacity: 0 }, 500, function(){
                    
                    setTimeout(m.animateIn, 10);
                    $(this).html('');
                //});
                // $(el).html('');
            break;
            case 6:

            break;
        }
  }
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
        $(el).animate({"opacity" : "0"}, 100, function(){
            setTimeout(m.finalShow, 1000);
            
        });
      return false;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    // $(el).html('');
    m.beepStyle(5);
  };

  m.finalShow = function(){
    var html_value = m.messages.join("<br/>");
    $(el).html(html_value);
    $(el).animate({"opacity" : "1"},500, (function(m){
           setTimeout( m.init , 10000);
    })(m));
    // $(el).animate({"opacity" : "1"}, 1000, (function(m){
    //     setTimeout( (function(m){
    //         m.init();
    //     })(m), 5000);
    // })(m));m.timeouts.push( 


 

  } 
  
  m.init();
}

console.clear();
