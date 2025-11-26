import { Tabs } from 'antd-mobile'
import './style.css'
import { useTabs } from './useTabs'
import HomeList from './HomeList'

const Home = () => {
  const { channels } = useTabs()
  return (
    <div>
      <div className='tabContainer'>
        <Tabs>
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
              <HomeList channelId={'' + item.id} />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Home