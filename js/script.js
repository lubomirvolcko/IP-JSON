$(document).ready(function() {
   $('#btnOK').click(function() {
       var ip=$("#ip").val();
       
       if(ip.length>1){
          var urllink='http://api.ipstack.com/';
           urllink=urllink +ip+'?access_key=074b85e7c25cb94db2cf347c1351aed0';
           
           $.ajax({
                url: urllink,
                data : { format: 'json' }, 
               type: 'GET',
            error : function(){
             //vypis chyby ak zlyha komunikacia so serverom
                $('#perror').html("Error! Invalid request!"); 
                $('#mainTable').empty();
           },
               
            dataType: 'json',
            success : function(data){
                
                console.log("IP: "+data.ip);
                console.log("Continent code: "+data.continent_code);
                console.log("Continent name: "+data.continent_name);
                console.log("Country code: "+data.country_code);
                console.log("Country name: "+data.country_name);
                console.log("Capital city: "+data.location.capital);
                console.log("Region code: "+data.region_code);
                console.log("Region name: "+data.region_name);
                console.log("City: "+data.city);
                console.log("ZIP: "+data.zip);
               
                //dynamic table
                $('#mainTable').empty();
                var table=$('<table id="info" class="table table-striped"/>');
                var tr=getLine('IP:', data.ip);
                table.append(tr);
                $('#mainTable').append(table);
                
                var tr=getLine('Continent code:', data.continent_code);
                table.append(tr);
                
                var tr=getLine('Continent name:', data.continent_name);
                table.append(tr);
                
                var tr=getLine('Country code:', data.country_code);
                table.append(tr);
                
                var tr=getLine('Country name:', data.country_name);
                table.append(tr);
                
                var tr=getLine('Capital city:', data.location.capital);
                table.append(tr);
                
                 var tr=getLine('Region code:', data.region_code);
                table.append(tr);
                
                var tr=getLine('Region name:', data.region_name);
                table.append(tr);
                
                var tr=getLine('City:', data.city);
                table.append(tr);
                
                var tr=getLine('ZIP:', data.zip);
                table.append(tr);
                            
            },
            type: 'GET'
           }); //AJAX
           
       }
       
   }); // CLICK
    
    function getLine(data1,data2){
        var tr=$('<tr id="tr"/>');
        var td1=$('<td id="td1"/>');
        $(td1).append(data1);
        var td2=$('<td id="td2"/>');
        $(td2).append(data2);
        tr.append(td1);
        tr.append(td2); 
        
        return tr;
    };
    
}); // READY