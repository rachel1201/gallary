var items = document.getElementsByClassName("Item");
var numbs = items.length;
function carouselleft(){
    for( var i = 0;i<numbs;i++){
        if(items[i].attributes.key.value == "active"){
            items[i].className = items[i].className.replace(/ active/, ' left');//使当前(i)图片移到左边,class变为left;
            items[i].attributes.key.value = "";
            var bf = find_lastplace(numbs,i,1); //获取之前移到左边图片,即相对现在在左边的图片;
            var next = find_nextplace(numbs,i,1);//获取即将移到当前图片,即相对现在在右边的图片;
            var nnext = find_nextplace(numbs,i,2);//获取即将移到当前图片的前一个图片;
            items[next].className = items[next].className.replace(/ right/, ' active');//使右边(next)图片移到当前位置，class由right变为active;
            setTimeout(function(){
                items[next].attributes.key.value += "active";
                items[nnext].className += " right";//使即将移到当前图片的前一个图片的class加个right;   
            },1200);
            items[bf].className = items[bf].className.replace(/ left/, '');//将左边图片的class的left属性去除，使之回到右边;
        }
    }
}
function carouselright(){
    for( var i = 0;i<numbs;i++){
        if(items[i].attributes.key.value == "active"){
           items[i].className = items[i].className.replace(/ active/, ' right'); 
           items[i].attributes.key.value = "";
           var bf = find_nextplace(numbs,i,1);//获取之前移到右边图片,即相对现在在右边的图片;
           var next = find_lastplace(numbs,i,1);//获即将移到当前图片,即相对现在在左边的图片;
           var nnext = find_lastplace(numbs,i,2);//获取即将移到当前图片的前一个图片;
           items[next].className = items[next].className.replace(/ left/, ' active');//使左边的(next)图片移到当前，class由left变为active;
           items[nnext].className += " right-to-left"  ;//即将移到当前图片的前一个图片移到左边去
            setTimeout(function(){
                items[next].attributes.key.value += "active"; 
                items[nnext].className = items[nnext].className.replace(/ right-to-left/, ' left');//使即将移到当前图片的前一个图片的class加个left;
            },1200);
           items[bf].className = items[bf].className.replace(/ right/, '');//将右边图片的class的right属性去除;
        }
    }
}
function find_lastplace(length,currentplace,range){
    if (currentplace < range) {
        return nextplace = currentplace + length - range;
    }
    else{
        return nextplace = currentplace - range;
    }
}
function find_nextplace(length,currentplace,range){
    if (currentplace >= length- range) {
        return nextplace = currentplace - length + range;
    }
    else{
        return nextplace = currentplace + range;
    }
}