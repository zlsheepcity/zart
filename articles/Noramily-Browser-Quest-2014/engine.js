$(document).ready(function() {
    
    $('#GameScene > div').on('click', clickEngine);
    $('#GameScene > div').hide();
    $('#PapaTheSheep').show();

    // for showing prize
    ActivateImageZzzoom();

});

function setCompleteNut() {
    $('#PanelNut').addClass('is-complete');
    checkFinal();
};
function setCompleteCup() {
    $('#PanelCup').addClass('is-complete');
    checkFinal();
};
function setCompleteTik() {
    $('#PanelTik').addClass('is-complete');
    checkFinal();
};
function setCompleteOck() {
    $('#PanelOck').addClass('is-complete');
    checkFinal();
};
function checkFinal() {
    var check1 = $('#PanelNut').hasClass('is-complete')
    var check2 = $('#PanelCup').hasClass('is-complete')
    var check3 = $('#PanelTik').hasClass('is-complete')
    var check4 = $('#PanelOck').hasClass('is-complete')
    if ( check1 && check2 && check3 && check4 ) {
        $('#PanelFin').addClass('is-complete');
    }
};

function clickEngine(e) {
    var $TARGET = $(e.currentTarget);
    var Target = $TARGET.attr('id');
    var Scene = SCENENAMES[SCENENUM];
    
    switch (Target) {
            
        // =============================================================================
        case 'PapaTheSheep':
            if ( Scene == '000LonelyPapa' ) {
                changeScene();
            } else if ( Scene == '003Snowman' ) {
                changeScene();
            } else {
                $TARGET.animo( { animation: 'wobble' } );
            }
        break;
        // =============================================================================
        case 'Sun':
            if ( Scene == '001RollingSun' ) {
                changeScene();
            } else {
                $TARGET.animo( { animation: 'tada' } );
            }
        break;
        case 'BelkinSyn':
        case 'BelkinDoch':
            $TARGET.animo( { animation: 'wobble' } );
        break;
        // =============================================================================
        case 'BelkinKolokol':
            $TARGET.animo( { animation: 'swing', duration:.5 } );
        break;
        // =============================================================================
        case 'BelkinDom':
            if ( Scene == '002BelkinDom' ) {
                changeScene();
            } else {
                setCompleteNut();
                $('#BelkinKolokol').animo( { animation: 'swing', duration:.5 } );
            }
        break;
        // =============================================================================
        case 'SnowmanBottom':
        case 'SnowmanMiddle':
        case 'SnowmanHead':
            $('#SnowmanBottom').animo( { animation: 'bounce', duration:.6 } );
            $('#SnowmanMiddle').animo( { animation: 'bounce', duration:.9 } );
            $('#SnowmanHead').animo( { animation: 'bounce', duration:1.2 } );;
        break;
        // =============================================================================
        case 'LeoTheSheep':
            if ( Scene == '004LeoTheSheep' ) {
                changeScene();
            } else {
                setCompleteCup();
                $TARGET.animo( { animation: 'bounce', duration:.6 } );
            }
        break;
        // =============================================================================
        case 'MamaTheSheep':
            if ( Scene == '005Mama' ) {
                changeScene();
            } else {
                $TARGET.animo( { animation: 'wobble' } );
            }
        break;
        // =============================================================================
        case 'PostBox':
            setCompleteTik();
            $TARGET.animo( { animation: 'bounce' } );
        break;
        // =============================================================================
        case 'SweetHome':
            if ( Scene == '006HomeSweetHome' ) {
                changeScene();
            }
        break;
        // =============================================================================
        case 'Tucka':
            if ( Scene == '006HomeSweetHome' ) {
                changeScene();
            } else if ( Scene == '009Dday' ) {
                changeScene();
            } else {
                $TARGET.animo( { animation: 'wobble' } );
            }
        break;
        // =============================================================================
        case 'Plane':
            if ( Scene == '007HardRain' ) {
                changeScene();
            }
        break;
        // =============================================================================
        case 'ShipTheShip':
            if ( Scene == '008LetsFly' ) {
                changeScene();
            }
        break;
        // =============================================================================
        case 'MamaEnjoy':
            $('#MamaEnjoy').toggleClass('enjoyMore');
        break;
        // =============================================================================
        case 'Koffer':
            setCompleteOck();
            $TARGET.animo( { animation: 'bounce' } );
        break;
        // =============================================================================
        case 'MamaLonely':
            if ( Scene == '010SunIsGoAway' ) {
                changeScene();
            } else if ( Scene == '011MyPhone' ) {
                $TARGET.animo( { animation: 'bounce' } );
            } else {
                $TARGET.animo( { animation: 'wobble' } );
            }
        break;
        // =============================================================================
        case 'Phone':
            if ( Scene == '011MyPhone' ) {
                changeScene();
            } else {
                $TARGET.animo( { animation: 'tada' } );
            }
        break;
        // =============================================================================

            
    } // switch (Target)
    
}