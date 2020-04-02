var serverURL = "http://localhost:3500/api/";
var items= [];


    function init(){
        console.log("Admin Page");
    }

    window.onload=init;



    class Item{
        constructor(code,title,price,description,category,image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
        this.user="Dru";
        }
    }

    function clearForm(){
        $('#code').val("");
        $("#title").val("");
        $("#price").val("");
        $("#description").val("");
        $("#category").val("");
        $("#image").val("");
    }


    function register(){
        //save from the input to the var
        var code=$("#code").val();
        var title=$("#title").val();
        var price=$("#price").val();
        var description=$("#description").val();
        var category=$("#category").val();
        var image=$("#image").val();

        if(code!="" && title !="" && price!="" && description!="" && category!="" && image!=""){
        var newItem = new Item(code,title,price,description,category,image);
        items.push(newItem);
        var jsonString=JSON.stringify(newItem);
        console.log(newItem);
        console.log(jsonString);
        }
        else{
            alert("Please properly fill out this form");
        }

        //sent object to server

        //servers only read strings, intigers, or boolean

        $.ajax({
            url:serverURL+"items",
            type:"POST",
            contentType:"application/json",
            data:jsonString,
            success:function(response){
                console.log("it works",response);
                //show the notification
                $('#alert-box').removeClass("hidden");
                //hide
                setTimeout(function(){
                    $('#alert-box').addClass("hidden");
                },3000);
                clearForm();
            },
            error:function(errorDetails){
                console.log("Error, Something went wrong",errorDetails);
            }
        });
    }


    /**assigning the information
    items.push({
        code:code,
        title:title,
        price:price,
        description:description,
        category:category,
        image:image
    });  */



    $("#register-btn").on('click',function(){
        register();
    });




    /**homework: display on console who is oldest by name/name, who is youngest, and sum of all the agess.
    function solveHomework(){
        var data=[{
            name= "Zach",
            age= 35,
            color= "blue"
        },
        {
            name= "Eli",
            age= 20,
            color= "silver"
        },
        {
            name= "Larry",
            age= 25,
            color= "blue"
        },
        {
            name= "Ed",
            age= 37,
            color= "red"
        },
        {
            name= "Pavel",
            age= 28,
            color= "purple"
        },
        {
            name= "Chad",
            age= 25,
            color= "red"
        }]
    }


    homework: read about HTTP methods GET,POST,PUT,PATCH,DELETE */
