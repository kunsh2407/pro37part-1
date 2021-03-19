class Contestant {
  constructor(){}

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(name){
    var contestantIndex = "contestant" + contestantCount;
    database.ref(contestantIndex).set({
      name:name
    });
  }
}
