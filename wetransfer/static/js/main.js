$(document).ready(function(){
    $("#sub").click(function(){
        console.log("suraj");
        var bucket = new AWS.S3({ params: { Bucket: 'fileshare-stagging' } });
        var fileChooser = document.getElementById('file');
        var file = fileChooser.files[0];
        if (file) {
            var params = { Key: 'FILE_NAME', ContentType: file.type, Body: file };
            bucket.upload(params).on('httpUploadProgress', function (evt) {
                console.log("Uploaded :: " + parseInt((evt.loaded * 100) / evt.total) + '%');
            }).send(function (err, data) {
                if(err)
                    console.log(err);
                console.log(data);
                alert("File uploaded successfully.");
            });
        }
        alert("The paragraph was clicked.");
    });    
});
