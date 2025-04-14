import { useState } from 'react'
import { Button } from '../components/button'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/shareIcon'
import { Card } from '../components/card'
import { CreateContentModal } from '../components/createContentModal'
import { SideBar } from '../components/sidebar';

export function DashBoard() {

  const [modelOpen, setModelOpen] = useState(false);
  return (
    <><div>
      <div>
        <SideBar />
      </div>

      <div className='pt-4 ml-72 min-h-screen bg-gray-200 '>
        <CreateContentModal open={modelOpen} onClose={() => {
          setModelOpen(false);
        }} />

        <div className='flex justify-end gap-4 mr-4'>
          <Button onClick={() => {
            setModelOpen(true)
          }} variant="primary" text="Add Content" startIcon={<PlusIcon />} ></Button>

          <Button variant='secondary' text={"Share Brain"} startIcon={<ShareIcon />} ></Button>
        </div>

        <div className='flex gap-4 mt-4 ml-4 '>
          <Card title='youtube ' link={"https://www.youtube.com/watch?v=mK8XBV85_g4"} type='youtube' />
          <Card title='twitter post' link="https://x.com/RandomTweetsApp/status/842197037395374081" type='twitter' />
        </div>

      </div>
    </div></>
  )
}


