import { useState } from 'react'; 
import './App.css';

import { Layout, Menu, Card, Row, Col } from 'antd';
import { 
  LaptopOutlined, 
  BookOutlined,
  FileTextOutlined 
} from '@ant-design/icons';

const { Sider, Content } = Layout;

// 模拟数据
const categories = [
  { key: '1', label: '01 电影/电视剧/动漫/纪录片', icon: <LaptopOutlined /> },
  { key: '2', label: '02 漫画/电子书/音乐/听书', icon: <BookOutlined /> },
];

const subCategories = [
  { key: '1-1', label: '公务员', parentKey: '1' },
  { key: '1-2', label: '工程师', parentKey: '1' },
  { key: '2-1', label: '编程书籍', parentKey: '2' },
];

const resources = [
  { id: 1, title: '最新电影合集', category: '1-1', desc: '2024最新影视资源' },
  { id: 2, title: '前端开发指南', category: '2-1', desc: 'React+TypeScript教程' },
];

function App() {
    // 2. 在组件顶部添加状态声明（必须在 return 之前）
    const [selectedCategory, setSelectedCategory] = useState('1');
    const [savedItems, setSavedItems] = useState<number[]>([]);
  
    // 3. 保存处理函数（推荐单独提取）
    const handleSave = (id: number) => {
      setSavedItems(prev => [...prev, id]);
      alert('保存成功！');
    };
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex' }}>
      <Sider width={280} theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={categories.map(cat => ({
            key: cat.key,
            icon: cat.icon,
            label: cat.label,
            children: subCategories
              .filter(sub => sub.parentKey === cat.key)
              .map(sub => ({ 
                key: sub.key, 
                label: sub.label 
              }))
          }))}
        />
      </Sider>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[16, 16]}>
          {resources.filter(item => 
              item.category.startsWith(selectedCategory) || 
              selectedCategory === item.category.split('-')[0]
            )
          .map(item => (
            <Col span={8} key={item.id}>
              <Card
                title={item.title}
                extra={<a>查看资源</a>}
                actions={[
                  <span key="date">2024-01-28</span>,
                  <button key="save">保存</button>
                ]}
              >
                <p>{item.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default App;