TD.Views.NewTaskView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["tasks/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function () {
    console.log("So, I hear you like creating new tasks?");
  }
});