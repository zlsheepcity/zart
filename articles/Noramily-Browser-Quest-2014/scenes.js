var SCENENUM = 0;
var SCENENAMES = [
      '000LonelyPapa'
    , '001RollingSun'
    , '002BelkinDom'
    , '003Snowman'
    , '004LeoTheSheep'
    , '005Mama'
    , '006HomeSweetHome'
    , '007HardRain'
    , '008LetsFly'
    , '009Dday'
    , '010SunIsGoAway'
    , '011MyPhone'
    , 'RESTART'
];



function changeScene() {
    SCENENUM++;
    var Scene = SCENENAMES[SCENENUM];
    $('#GameScene > div').animo("cleanse");
    
    switch (Scene) {
            
        // =============================================================================
        case '001RollingSun':
            $('#Phone').hide();
            $('#PapaTheSheep').animo( { animation: 'bounce', duration:.5 } );
            $('#Sun').show().animo( { animation: 'bounceInRight' }, function(e) {
                $('#Sun > img').animo({animation: "spinner", iterate: "infinite", duration: 15});
            });
        break;
        // =============================================================================
        case '002BelkinDom':
            $('#Background-Sky-Winter').show().animo( { animation: 'fadeInDown', duration:1.5 } );
            
            $('#BelkinDom').show().animo( { animation: 'bounceInDown', duration:.6 },
                function(e) {
                    $('#BelkinSyn').show().animo( { animation: 'bounceInDown', duration:.4 } );
                    $('#BelkinDoch').show().animo( { animation: 'bounceInDown', duration:.6 } );
            });
            $('#BelkinKolokol').show().animo( { animation: 'bounceInDown', duration:1 } );

            
            $('#Sun').animo( { animation: "tada" } );
        break;
        // =============================================================================
        case '003Snowman':
            $('#BelkinKolokol').animo( { animation: 'swing', duration:.5 } );
            $('#BelkinSyn').addClass('goToWork').animo( { animation: 'bounceInRight', duration:.5 } );
            $('#BelkinDoch').addClass('goToWork').animo( { animation: 'bounceInRight', duration:.5 } );
            $('#SnowmanBottom').show().animo( { animation: 'bounceInDown', duration:1 } );
            $('#SnowmanMiddle').show().animo( { animation: 'bounceInDown', duration:1.3 } );
            $('#SnowmanHead').show().animo( { animation: 'bounceInDown', duration:1.6 } );
        break;
        // =============================================================================
        case '004LeoTheSheep':
            $('#LeoTheSheep').show().animo( { animation: 'bounceInLeft', duration:1.2 } );
            $('#PapaTheSheep').animo( { animation: 'bounce', duration:.5 } );
        break;
        // =============================================================================
        case '005Mama':
            $('#MamaTheSheep').show().animo( { animation: 'bounceInLeft', duration:.5 } );
            $('#BelkinSyn').removeClass('goToWork').animo( { animation: 'bounceInUp', duration:1 } );
            $('#BelkinDoch').removeClass('goToWork').animo( { animation: 'bounceInUp', duration:1 } );
            
        break;
        // =============================================================================
        case '006HomeSweetHome':
            $('#MamaTheSheep').animo( { animation: 'bounce', duration:.5 } );
            $('#BelkinDom').animo( { animation: 'bounceOutLeft' }, function(e){e.element.hide();} );
            $('#BelkinKolokol').animo( { animation: 'bounceOutLeft' }, function(e){e.element.hide();} );
            $('#BelkinSyn').animo( { animation: 'bounceOutLeft' }, function(e){e.element.hide();} );
            $('#BelkinDoch').animo( { animation: 'bounceOutLeft' }, function(e){e.element.hide();} );
            $('#SweetHome').show().animo( { animation: 'bounceInDown' }, function(){
                $('#Tucka').show().animo( { animation: 'fadeInUp', iterate: "infinite" } );
            } );
            $('#PostBox').show().animo( { animation: 'bounceInDown' } );
        break;
        // =============================================================================
        case '007HardRain':
            $('#Tucka').animo("cleanse").addClass('big').animo( { animation: 'shake' } );
            $('#Background-Sky-Winter').addClass('sea').animo( { animation: 'shake' } );
            $('#Sun').animo( { animation: 'shake' } );
            
            $('#SweetHome').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#PostBox').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#SnowmanBottom').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#SnowmanMiddle').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#SnowmanHead').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#PapaTheSheep').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#MamaTheSheep').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#LeoTheSheep').animo( { animation: 'fadeOutDown',duration:.5 }, function(e){e.element.hide();} );
            $('#Sea').show().animo( { animation: 'fadeInUp' }, function(){
                $('#Plane').show().animo( { animation: 'bounceInLeft' } );
            } );
        break;
        // =============================================================================
        case '008LetsFly':
            $('#Plane').animo( { animation: 'bounceOutRight' }, function(e){
                e.element.hide();
                $('#Sea').addClass('deeper');
                $('#Island').show().animo( { animation: 'fadeInUp' } );
                $('#ShipTheShip').show().animo( { animation: 'bounceInLeft' } );
            });
        break;
        // =============================================================================
        case '009Dday':
            $('#ShipTheShip').animo( { animation: 'bounceOutRight' }, function(e){
                e.element.hide();
                $('#MamaEnjoy').show().animo( { animation: 'fadeInUp', duration:.5 } );
            });
            
        break;
        // =============================================================================
        case '010SunIsGoAway':
            $('#Tucka').addClass('nosun');
            
            $('#MamaEnjoy').animo( { animation: 'fadeOut', duration:1 }, function() {
                $('#MamaEnjoy').hide();
                $('#MamaLonely').show().animo( { animation: 'bounce',duration:.5 } );
                $('#Koffer').show().animo( { animation: 'bounce',duration:.5 } );
            } );
        break;
        // =============================================================================
        case '011MyPhone':
            $('#Phone').show().animo( { animation: 'tada' } );
            $('#MamaLonely').show().animo( { animation: 'bounce',duration:.5 } );
        break;
        // =============================================================================
        case 'RESTART':
            $('#Sun').hide();
            $('#Island').hide();
            $('#Koffer').hide();
            $('#MamaLonely').hide();
            $('#Tucka').hide().removeClass('nosun').removeClass('big');
            $('#Sea').hide().removeClass('deeper');
            $('#Background-Sky-Winter').hide().removeClass('sea');
            $('#MamaEnjoy').hide().removeClass('enjoyMore');
            $('#Phone').show().animo( { animation: 'tada' } );
            $('#PapaTheSheep').show().animo( { animation: 'bounce', duration:.5 } );
            SCENENUM = 0;
        break;
        // =============================================================================
/*        


            
*/            
            
    } // switch (Scene)
}