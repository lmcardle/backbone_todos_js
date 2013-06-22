window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootE1, tasks) {
    console.log("JS Client Code works. Yay!!!");
    var tasksListView = new TD.Views.TasksListView({
      collection: tasks
    });

    $(rootE1).html(tasksListView.render().$el);
  }
};