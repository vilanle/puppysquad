 function store(){
     var address1 = document.getElementById("first_a");
     var address2 = document.getElementById("second_a");
     var event_title = document.getElementById("event_title");
     var event_date = document.getElementById("event_date");
     var breed = document.getElementById("breed");
     var dog_size = document.getElementById("dog_size");
     var price = document.getElementById("price");
     var event_description = document.getElementById("event_description");
     localStorage.setItem("first_a", address1.value);
     localStorage.setItem("second_a", address2.value);
     localStorage.setItem("event_title", event_title.value);
     localStorage.setItem("event_date", event_date.value);
     localStorage.setItem("breed", breed.value);
     localStorage.setItem("dog_size", dog_size.value);
     localStorage.setItem("price", price.value);
     localStorage.setItem("event_description", event_description.value);
    }

