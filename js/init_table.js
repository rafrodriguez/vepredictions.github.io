$(document).ready(function() {
    $('#table1').DataTable( {
        "scrollY":        "600px",
        "scrollCollapse": true,
        "paging":         false,
        "columnDefs": [                    
            { "width": "1%", "targets": 3, "className": "dt-left"}
            /* TODO:  make the alignment work with "center" */

        ]                                 

    } );

    var table = $('#table1').DataTable();
    
    $('#mysearch').on( 'keyup', function () {
        table.search( this.value ).draw();

    });

    $('#clearfilter').on( 'click', function () {
        table.search("").draw();
        document.getElementById("mysearch").value = "";
    } );

    $('td').on( 'click', function () {                            
        var curr_search_term  = table.search();                         
        var new_search_term = curr_search_term + " " + this.innerHTML;  
        table.search(new_search_term).draw();                           
        document.getElementById("mysearch").value = new_search_term;
    } );                                                                
    
} );
