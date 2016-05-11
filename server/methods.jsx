Meteor.methods({
  addResolution(resolution) {
    if(!Meteor.userId()){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
    this.refs.resolution.value = "";
  },
  toggleResolutions(resolution) {
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.update(resolution._id, {
      $set: {
        complete: !status
      }
    });
  },
  deleteResolution(resolution) {
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.remove(resolution._id);
  },
});
