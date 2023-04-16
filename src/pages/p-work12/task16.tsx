import { Tabs, Tab, Button } from 'react-bootstrap';
import { useState } from 'react';

interface ITab {
  eventKey: string;
  title: string;
}

const tabList: ITab[] = [
  { eventKey: 'tab1', title: 'Вкладка 1' },
  { eventKey: 'tab2', title: 'Вкладка 2' },
  { eventKey: 'tab3', title: 'Вкладка 3' },
];

interface ITabsProps {}

export const Task16: React.FC<ITabsProps> = () => {
  const [activeKey, setActiveKey] = useState('tab1');
  const currentIndex = tabList.findIndex((tab) => tab.eventKey === activeKey);
  const previousIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
  const nextIndex =
    currentIndex === tabList.length - 1 ? currentIndex : currentIndex + 1;

  const handleBackClick = () => setActiveKey(tabList[previousIndex].eventKey);

  const handleNextClick = () => setActiveKey(tabList[nextIndex].eventKey);

  return (
    <>
      <Tabs activeKey={activeKey} onSelect={(key) => setActiveKey(key!)}>
        {tabList.map((tab) => (
          <Tab 
          key={tab.eventKey} 
          eventKey={tab.eventKey} 
          title={tab.title}
          id="controlled-tab-example"
          >
            <h1>{tab.title}</h1>
          </Tab>
        ))}
      </Tabs>
      <div className="text-center mt-3">
        <Button
          variant="primary"
          disabled={currentIndex === 0}
          onClick={handleBackClick}
        >
          Предыдущая вкладка
        </Button>{' '}
        <Button
          variant="primary"
          disabled={currentIndex === tabList.length - 1}
          onClick={handleNextClick}
        >
          Следующая вкладка
        </Button>
      </div>
    </>
  );
};