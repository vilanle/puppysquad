$('#breed-select').change(function() {
    let events = JSON.parse(localStorage.Events);

    if($('#breed-select').val() === 'Breed') {
      $('.event').show();
    } else {
      $('.event').hide();
      for(let i = 0; i < events.length; i++) {
        let event = events[i];
        let lowercaseBreed = event.breed.toLowerCase();
        let breedSelectLower = $('#breed-select').val().toLowerCase();

        if(lowercaseBreed === breedSelectLower) {
          $('.' + event.breed).show();
        }
      }
    }
  }
);

$('#size-select').change(function() {
    let events = JSON.parse(localStorage.Events);

    if($('#size-select').val() === 'Dog Size') {
      $('.event').show();
    } else {
      $('.event').hide();
      for(let i = 0; i < events.length; i++) {
        let event = events[i];
        let lowercaseBreed = event.dogSize.toLowerCase();
        let breedSelectLower = $('#size-select').val().toLowerCase();

        if(lowercaseBreed === breedSelectLower) {
          $('.' + event.dogSize).show();
        }
      }
    }
  }
);

$('#date-select').change(function() {
    let events = JSON.parse(localStorage.Events);

    if($('#date-select').val() === 'Date') {
      $('.event').show();
    } else {
      $('.event').hide();
      for(let i = 0; i < events.length; i++) {
        let today = new Date().toDateString();
        let event = events[i];

        let eventDate = event.date;
        let dateSelect = $('#date-select').val();

        let parseEventDate = Date.parse(eventDate);
        let parseToday = Date.parse(today);

        let difference = parseEventDate - parseToday;


        switch(dateSelect) {
          case 'Today':
            if (eventDate === today) {
              $('.' + event.dateString).show();
            }
            break;
          case 'This Week':
            if (difference <= 604800000) {
              $('.' + event.dateString).show();
            }
            break;
          case 'This Month':
            if (difference <= 2419200000) {
              $('.' + event.dateString).show();
            }
            break;
          default:
            break;
        }
      }
    }
  }
);

$('#price-select').change(function() {
    let events = JSON.parse(localStorage.Events);

    if($('#price-select').val() === 'Price') {
      $('.event').show();
    } else {
      $('.event').hide();
      for(let i = 0; i < events.length; i++) {
        let event = events[i];

        let eventPrice = event.price.toLowerCase();
        let eventPriceNumber = parseInt(event.price);
        let priceSelect = $('#price-select').val();

        switch(priceSelect) {
          case 'Free':
            if(eventPrice === 'free') {
              $('.' + event.price).show();
            }
            break;
          case '$':
            if(eventPriceNumber <= 10) {
              $('.' + event.price).show();
            }
            break;
          case '$$':
            if(eventPriceNumber <= 50 && eventPriceNumber > 10) {
              $('.' + event.price).show();
            }
            break;
          case '$$$':
            if(eventPriceNumber > 50) {
              $('.' + event.price).show();
            }
            break;
          default:
            break;
        }

      }
    }
  }
);
