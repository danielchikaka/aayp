     /**
         * -----------------------------------------------------------------------------------------------
         * main site search
         * ------------------------------------------------------------------------------------------------
         */

                       $(document).ready(function(){

                        // if(!testAttribute('input', 'autofocus')){
                        //      $('#main-site-search-form input').focus();
                        // }
     
                        $('#main-menu ul#nav .search-btn').on('click', function(event){
                                      event.preventDefault();

                                                      if ( $( "#main-site-search-form" ).is( ":hidden" ) ) {

                                                  $( "#main-site-search-form" ).slideDown();
                                                  $("#main-search-large-screen").hide();
                                                } else {
                                                  $("#main-search-large-screen").delay(16000).show();
                                                  $('#main-site-search-form').hide();
                                                }

                        });  


                        $('#close-search').on('click', function(){

                                                      if ( $( "#main-search-large-screen" ).is( ":hidden" ) ) {

                                                  $( "#main-search-large-screen" ).delay(16000).show();

                                                  $("#main-site-search-form").delay(5).fadeOut();
                                                }

                        });

                        $('#main-search-large-screen input').keypress(function (e) {
                          if (e.which == 13) {
                            $('input[type="search"]').submit();
                          }
                        });
               
               });
