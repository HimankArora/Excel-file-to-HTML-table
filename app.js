function readExcelFile () {
    var input = document.getElementById( "excel-file" );
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function ( event ) {
        var data = event.target.result;
        var workbook = XLSX.read( data, { type: 'binary' } );
        var sheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[sheetName];
        var html = XLSX.utils.sheet_to_html( sheet );
        console.log( html )
        document.getElementById( "excel-data" ).innerHTML = html;
    };
    reader.readAsBinaryString( file );
}
readExcelFile()