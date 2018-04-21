// adding the task;
// targeted "btn" class on "Add task" button
$('.btn').on("click", function(){
    let newTask = prompt("What is next task?");
    console.log(newTask);
    //placing newTask into HTML
    let addedTask = "<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></li>";
    // targeting "ul"
    $("#task-list").append(addedTask);
});



$("#task-list").on("click", ".fa", function() {
    $(this).parent().remove();
    console.log("click");
  });