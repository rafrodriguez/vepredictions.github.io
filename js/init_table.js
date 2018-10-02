$(document).ready(function() {
    var table = $('#table1').DataTable( {
        "scrollCollapse": true,
        "paging":         false,
        "columnDefs": [                    
            { "width": "1%", "targets": 3, "className": "dt-left"}
            /* TODO:  make the alignment work with "center" */

        ],                                 
       "responsive": true,
        "order": [[ 1, "desc" ]]
    } );
    
    $('#mysearch').on( 'keyup', function () {
        table.search( this.value ).draw();

    });

    $('#clearfilter').on( 'click', function () {
        table.search("").draw();
        document.getElementById("mysearch").value = "";
    } );
    
    
} );


