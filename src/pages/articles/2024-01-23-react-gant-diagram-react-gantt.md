Для создания диаграммы Ганта на React можно использовать библиотеку react-gantt. Для начала необходимо установить библиотеку с помощью менеджера пакетов npm:

npm install react-gantt

После этого можно создать компонент, в котором будет использоваться библиотека. В компоненте необходимо импортировать библиотеку и её модуль Gantt:

```tsx
import React from 'react';
import Gantt from 'react-gantt';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Task 1',
          start: new Date(2019, 1, 1),
          end: new Date(2019, 1, 30),
        },
        {
          id: 2,
          name: 'Task 2',
          start: new Date(2019, 1, 10),
          end: new Date(2019, 1, 20),
        },
      ],
    };
  }

  render() {
    return (
      <div style={{height: '50vh', width: '100%'}}>
        <Gantt
          data={this.state.data}
          onTaskClick={this.handleTaskClick}
          height={'100%'}
          width={'100%'}
          enableContextMenu={true}
          contextMenuOptions={contextMenuOptions}
        />
      </div>
    );
  }
}
```

В данном примере используется простой массив объектов для представления данных задачи. Каждый объект содержит id, имя и даты начала и окончания задачи.

Также в компоненте определён обработчик события handleTaskClick, который будет вызываться при клике на задачу:

```tsx
handleTaskClick(task)
{
  console.log(`Task ${task.name} clicked`);
}
```

Для отображения контекстного меню можно использовать следующий объект:

```tsx
const contextMenuOptions = {
  items: [
    {
      name: 'Delete',
      action: () => {
// Ваш код для удаления задачи
      },
    },
  ],
};
```

В данном примере контекстное меню содержит только одну кнопку "Delete", которая вызывает функцию удаления задачи.

Наконец, в методе render компонента вызывается функция render из библиотеки react-gantt, которая отображает диаграмму Ганта на основе переданных данных.

Для работы диаграммы Ганта необходимо установить библиотеку react-gantt и добавить в компонент соответствующий код.
