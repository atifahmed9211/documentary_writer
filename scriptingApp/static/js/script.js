(function(){
    var
     form = $('.form'),
     cache_width = form.width(),
     a4  =[ 595.28,  841.89];  // for a4 size paper width and height

    $('#pdf').on('click',function(){
     $('body').scrollTop(0);
     createPDF();
    });
    //create pdf
    function createPDF(){
     // getCanvas().then(function(canvas){
      var
      // img = canvas.toDataURL("image/png"),
      doc = new jsPDF();
            // doc.addImage(img, 'JPEG', 20, 20);
            // doc.save('test.pdf');
            // form.width(cache_width);
       doc.fromHTML($('.form').get(0), 15, 15, {
        'width': 800
    });
      doc.save('test.pdf');

     // });
    }

    // create canvas object
    function getCanvas(){
     form.width((a4[0]*1.33333) -80).css('max-width','none');
     return html2canvas(form,{
         imageTimeout:2000,
         removeContainer:false
        });
    }

    }());
