(function(){
    var logger = document.getElementsByClassName("VisibilityLogger")[0],list_items,playlist=new Array();
    var songs = parseInt(document.getElementsByClassName("HeaderBackstage__text__subTitle HeaderBackstage__text__subTitle--sm")[0].getElementsByTagName("span")[0].innerHTML);
        window.addEventListener("wheel",
            function(){
                list_items=document.getElementsByClassName("RowItemCenterColumn");
                var items,item;
                for(var i =0; i<list_items.length;i++){

                    var item_exists = false;
                    items = list_items[i].getElementsByClassName("RowItemText");
                    item = items[1].innerHTML+" - "+items[0].innerHTML;

                    for(var j=0;j<playlist.length;j++){
                        if(item == playlist[j]){
                            item_exists = true;
                        }
                    }

                    if(!item_exists){
                        playlist.push(item);
                    }
                }
                console.log(playlist.length);
                console.log(songs);
                if(songs-playlist.length == 0 || songs-playlist.length == 1){
                    var string;
                    for(var i=0;i<playlist.length;i++){
                        string+=playlist[i]+"\n";
                        console.log(playlist[i]);
                    }
                    console.log(string);
                }
            ;});

}());