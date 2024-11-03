function showLessonIds() {
  const selectorTaskItem = '.can-control-extended';

  const elementsListTasks = document.querySelectorAll(selectorTaskItem);
  console.log('elementsListTasks:', elementsListTasks)
  elementsListTasks.forEach(elementTask => {
    const answerId = elementTask.dataset.id;

    if (!answerId) {
      return;
    }

    elementTask.style.position = 'relative';

    const elId = document.createElement('button');

    elId.innerHTML = answerId;
    elId.style.position = 'absolute';
    elId.style.top = '10px';
    elId.style.right = '10px';
    elId.style.padding = '10px';
    elId.style.backgroundColor = 'litegray';
    elId.style.color = 'black';
    elId.style.fontWeight = 'bold';

    elId.onclick = () => {
      navigator.clipboard.writeText(answerId)
        .then(() => console.log(answerId));
    };

    elementTask.appendChild(elId);

    console.log('elementTask.dataset:', elementTask.dataset.id)
  })
}

showLessonIds();
