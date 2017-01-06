import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      console.log("Your inside toggleListDetail");
      return this.toggleProperty('listDetailHidden');
    }
  }
});
