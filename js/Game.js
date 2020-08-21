class Game{
  constructor(){
  }
  update(itemName){
    database.ref('item').update({
      item: itemName
    });
  }

  update1(Time){
    database.ref('time').update({
      time: Time
    });
  }
    
  update2(Place){
    database.ref('place').update({
      place: Place
    });
  }

  update3(Number){
    database.ref('itemNumber').update({
      itemNumber: Number
    });
  }

  getItemInfo() {
    databaseitem = database.ref("item/item");
    databaseitem.on("value", (data) => {
      databaseitem = data.val();
    });
  }

  getNumInfo() {
    databasenum = database.ref("itemNumber/itemNumber");
    databasenum.on("value", (data) => {
      databasenum = data.val();
    });
  }

  getPlaceInfo() {
    databaseplace = database.ref("place/place");
    databaseplace.on("value", (data) => {
      databaseplace = data.val();
    });
  }

  getTimeInfo() {
    databasetime = database.ref("time/time");
    databasetime.on("value", (data) => {
      databasetime = data.val();
    });
  }
}