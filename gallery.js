var photos = []; //declare an empty array to store image element
        var fileNames = [];//declare an empty element to store image file names
        var imageList = [];//declare an empty array to store html list that contain an image
        var image;//declare an empty variable to store the assembled image list codes 
        var openList = "<li class='case'>";//declare a variable to contain open list tag
        var closeList = "</li>";//declare a variable to contain close list tag

        var captionTexts = ["E-commerce: Footwear","E-commerce: Home Decor","E-commerce: Watches","E-commerce: Stationery", "E-commerce: Personal Care", "Gaming", "Entertainment", "Food and Beverages", "Financial Services", "Health Care"];
        var openCaptionTag = "<h3 class='caption'>";
        var closeCaptionTag = "</h3>";

        var descTexts = ["Scaling with Power 5","Instagram is still the Queen", "Optimizing for revenue", "Make creatives your differentiator", "Good content is never out of style", "Reaching the non-gamers", "Full funnel strategy", "Influencing the influencers", "Make personal finance cool", "Lifecycle marketing as a strategy" ];
        var openDescTag = "<p class='description' onClick = 'displayBox(";
        var openDescTag1 = ")'>";
        var closeDescTag = "</p>";


        var openBoxHeadingTag = "<div id='box-heading'>";
        var closeBoxHeadingTag = "</div>";
        var BoxHeadingTexts = ["E-commerce: Footwear","E-commerce: Home Decor","E-commerce: Watches","E-commerce: Stationery", "E-commerce: Personal Care", "Gaming", "Entertainment", "Food and Beverages", "Financial Services", "Health Care"];

        var openBoxTextsTag = "<div id='box-texts'>";
        var closeBoxTextsTag = "</div>";
        var BoxTextsTexts = ["Facebook's Power 5 best practices were applied to consolidate campaigns and leverage the algorithm.", "Instagram proves to be the most efficent acquisition channel for a Home Decor brand.", "Passing revenue data to Facebook enables revenue optimization and increases the brand's ROAS.", "Rigorous creative testings helps a Stationery ecom brand improve efficiency and ROAS.", "Producing relevant content helps a personal care brand build a loyal organic followers.", "Exploring different audiences helps a gaming brand reach non-traditional non-gamers and increase market share.", "Full funnel strategy helps an entertainment brand increase awareness, build consideration, and drive conversions.", "Influencing strategy helps an F&B brand spread awareness and drive conversions.", "Content strategy and creative testings come together to help a fintech brand stay relevant.", "Life cycle marketing proves its value in helping a heathcare brand retain customers."];

       
        var clickTexts = "Click This to Close";
       

    
        //Create a loop to create 6 images starting with index of 0
        for (var i=0; i<10; i++) {
            fileNames.push("image"+(i+1));//create image file name and store in the array
            photos.push("<img src='images/"+fileNames[i]+".png'>"); //assemble file name into image element and store in an array
            image =  
            openList + 
            photos[i] + 
            openCaptionTag + 
            captionTexts[i] + 
            closeCaptionTag +
            openDescTag + 
            i +
            openDescTag1 +
            descTexts[i] +
            closeDescTag + 
            closeList; //assemble image element from array list with list elements and store in a variable
            imageList.push(image); //store(push) the assemnled list codes into an array;
        
        }
        //Display all six images code stored in the array
        document.getElementById("case-studies").innerHTML = imageList.join(" ");

        function displayBox(num) {
            document.getElementById("info-box").style.visibility = "visible";
            document.getElementById("box-heading").innerHTML= captionTexts[num];
            document.getElementById("box-texts").innerHTML= BoxTextsTexts[num];
            document.getElementById("click-close").innerHTML= clickTexts;
        }

        function closeBox() {
            document.getElementById("info-box").style.visibility = "hidden";
        }

        document.getElementById("click-close").addEventListener("click", closeBox)