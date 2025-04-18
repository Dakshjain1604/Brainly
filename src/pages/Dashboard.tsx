import { useState, useEffect } from 'react'
import { Button } from '../components/button'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/shareIcon'
import { Card } from '../components/card'
import { CreateContentModal } from '../components/createContentModal'
import { SideBar } from '../components/sidebar';
import { useContent } from '../hooks/useContent'
import axios from "axios";
import { BACKEND_URL } from '../config'


export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return <div>
    <SideBar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
        <Button onClick={async () => {
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
          }, {
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          });
          const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareUrl);
        }} variant="secondary" text="Share brain" startIcon={<ShareIcon />}></Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {contents.map(({ type, link, title }) => <Card
          type={type}
          link={link}
          title={title}
        />)}
      </div>
    </div>
  </div>
}