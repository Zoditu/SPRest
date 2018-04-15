class SPRest
{
    constructor( Site )
    {
        this.Request = new XMLHttpRequest();
        this.Site = Site;
    } 
    
    RequestItems( List, WhatToDo, isJSON, Filter )
    {
        var that = this.Request;
        that.onreadystatechange = () =>
        {
            WhatToDo( that.readyState, that.status, isJSON ? JSON.parse(that.responseText) : that.responseXML );
        }
        that.open( "GET", "/sites/" + this.Site + "/_vti_bin/listdata.svc/" + List + "()?$filter=" + Filter, false );
        if( isJSON )
            that.setRequestHeader( 'Accept', 'application/json;' );
        that.send();
    }
    
    RequestItemsAsync( List, WhatToDo, isJSON, Filter )
    {
        var that = this.Request;
        that.onreadystatechange = () =>
        {
            WhatToDo( that.readyState, that.status, isJSON ? JSON.parse(that.responseText) : that.responseXML );
        }
        that.open( "GET", "/sites/" + this.Site + "/_vti_bin/listdata.svc/" + List + "()?$filter=" + Filter, true );
        if( isJSON )
            that.setRequestHeader( 'Accept', 'application/json;' );
        that.send();
    }

    FindItem( List, ID, WhatToDo, isJSON, Field )
    {
        var that = this.Request;
        that.onreadystatechange = () =>
        {
            WhatToDo( that.readyState, that.status, isJSON ? JSON.parse(that.responseText) : that.responseXML );
        }
        that.open( "GET", "/sites/" + this.Site + "/_vti_bin/listdata.svc/" + List + "(" + ID + ")/" + Field, false );
        if( isJSON )
            that.setRequestHeader( 'Accept', 'application/json;' );
        that.send();
    }

    FindItemAsync( List, ID, WhatToDo, isJSON, Field, element )
    {
        var that = this.Request;
        that.onreadystatechange = () =>
        {
            WhatToDo( that.readyState, that.status, isJSON ? JSON.parse(that.responseText) : that.responseXML, element );
        }
        that.open( "GET", "/sites/" + this.Site + "/_vti_bin/listdata.svc/" + List + "(" + ID + ")/" + Field, true );
        if( isJSON )
            that.setRequestHeader( 'Accept', 'application/json;' );
        that.send();
    }

    FindUserAsync( ID, WhatToDo, isJSON )
    {
        var that = this.Request;
        that.onreadystatechange = () =>
        {
            WhatToDo( that.readyState, that.status, isJSON ? JSON.parse(that.responseText) : that.responseXML );
        }
        that.open( "GET", "/sites/" + this.Site + "/_api/web/getuserbyid(" + id + ")", true );
        if( isJSON )
            that.setRequestHeader( 'Accept', 'application/json;' );
        that.send();
    }
}
