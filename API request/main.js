var API_KEY = 'AIzaSyD4wnXW70Omk5E75P8nBcxuLXTi3NsR16U';

var spreadsheetId = '1BYzRv_crWcWGxRW4C0FCa9gw2fMnFL18E5AOI1MSGPQ';

var range = 'A1:B6';

var API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'
    +spreadsheetId
    +'/values/'
    +range
    +'?key=' + API_KEY;

fetch(API_URL)
.then(response => response.json())
.then(data => {
    console.log(data.values);

})
