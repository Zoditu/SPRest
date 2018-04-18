# SPRest
A custom JavaScript library for Sharepoint 2010 or above to make REST request and return XML or JSON responses. This allows FrontEnd developers make N quantity of requests at the same time, increasing loading time and responsivity.

# Usage

RequestItemsAsync( List, WhatToDo, isJSON, Filter ) -> Where List is 'ListName', WhatToDo a function with parameters (state, status, response), isJSON a Boolean, true if you want the response in JSON, false for XML and Filter is a SharePoint REST Filter parameter.

new SPRest( 'mySite/site/...' ).RequestItemsAsync( 'ListName', ( state, status, response) => { //What to do here with the request }, true, 'ListField eq Value');
