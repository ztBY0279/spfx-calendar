import * as React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
interface listDataType {
  type:string;
  content:string;
}

const getListData = (value: Dayjs):listDataType[] => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        {type: 'warning', content: 'This is warning event.'},
        {type: 'success', content: 'This is usual event.'},
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs):number | undefined => {
  if (value.month() === 8) {
    return 1394;
  }
};

const App: React.FC = () => {
  const monthCellRender = (value: Dayjs):JSX.Element | null => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs):JSX.Element => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};

export default App;
// import * as React from 'react';
// import { Calendar } from 'antd';
// import type { CalendarProps } from 'antd';
// import type { Dayjs } from 'dayjs';

// const App: React.FC = () => {
//   const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']):void => {
//     console.log(value.format('YYYY-MM-DD'), mode);
//   };

//   return <Calendar onPanelChange={onPanelChange} />;
// };

// export default App;