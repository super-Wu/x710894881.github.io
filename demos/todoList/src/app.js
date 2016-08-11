

var data=[
   {
        "id":new Date().getTime()+Math.random(),
        "title":"这是一条内容",
        "isChecked":false
   },
   {
        "id":new Date().getTime()+Math.random(),
        "title":"这是另一条数据",
        "isChecked":true
   }
];



var control={
   addItem:function(val){
      data.push({
        "id":new Date().getTime()+Math.random(),
        "title":val,
        "isChecked":false
      });

      control.render();
   },
   changeItem:function(id){
      data.forEach(function(elem){
        if(elem.id === id){
          elem.isChecked = !elem.isChecked;
        }
      });
      control.render();
   },
   checkAll:function(bool){
      data.forEach(function(elem){
          elem.isChecked = bool;
      });
      control.render();
   },
   deleItem:function(id){
      data.forEach(function(elem,index){
        if(elem.id === id){
          data.splice(index,1);
        }
      });
      control.render();
   }

};

