
 $(document).ready(function(){
   //Nairobi
     $("#nairobi").click(function(){
          $("#counties").toggle(3000, function(){
            alert('Select  a SubCounty')
          });
          $("#nairobiSub").show();
        });


        //Kisumu
        $("#kisumu").click(function(){
             $("#counties").toggle(3000, function(){
               alert('Select  a SubCounty')
             });
             $("#kisumuSub").show();
           });

           //Mombasa
           $("#mombasa").click(function(){
                $("#counties").toggle(3000, function(){
                  alert('Select  a SubCounty')
                });
                $("#mombasaSub").show();
              });

              //Nakuru
              $("#nakuru").click(function(){
                   $("#counties").toggle(3000, function(){
                     alert('Select  a SubCounty')
                   });
                   $("#nakuruSub").show();
                 });

                  /////HOSPITALS///////

                  //machikos HOSPITALS//
                  $("#machakos").click(function(){
                       $("#nairobiSub").toggle(3000, function(){
                         alert('Select  a Hospital!')
                       });
                       $("#machakosHosp").show();
                     });

                     //kajiado Hospital//
                     $("#kajiado").click(function(){
                          $("#nairobiSub").toggle(3000, function(){
                            alert('Select  a Hospital!')
                          });
                          $("#kajiadoHosp").show();
                        });

                        //kiambu Hospital//
                        $("#kiambu").click(function(){
                             $("#nairobiSub").toggle(3000, function(){
                               alert('Select  a Hospital!')
                             });
                             $("#kiambuHosp").show();
                           });

                           //muranga hospital//
                           $("#muranga").click(function(){
                                $("#nairobiSub").toggle(3000, function(){
                                  alert('Select  a Hospital!')
                                });
                                $("#murangaHosp").show();
                              });


                              ///LOCATIONS///

                              //Machakos Level 5 Hospital//
                              $("#machakoslevel5hospital").click(function(){
                                   $("#machakosHosp").toggle(3000, function(){
                                     alert('Here you go')
                                   });
                                   $("#machakoslevel5hospitalLocation").show();
                                 });

                                 //Bishop Kioko Catholic Hospital//
                                 $("#shalomhospital").click(function(){
                                      $("#machakosHosp").toggle(3000, function(){
                                        alert('Here you go')
                                      });
                                      $("#bishopkiokocatholichospitalLocation").show();
                                    });

                                    //Shalom Hospital//
                                    $("#bishopkiokocatholichospital").click(function(){
                                         $("#machakosHosp").toggle(3000, function(){
                                           alert('Here you go')
                                         });
                                         $("#shalomhospitalLocation").show();
                                       });

                                       //Bristol Park Hospital//
                                       $("#bristolparkhospital").click(function(){
                                            $("#machakosHosp").toggle(3000, function(){
                                              alert('Here you go')
                                            });
                                            $("#bristolparkhospitalLocation").show();
                                          });



      });
      $('.carousel').carousel({
    interval: 2000
  });
