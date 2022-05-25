import { injectStrict, AxiosKey } from '@/utils/InjectAxios'
const http = injectStrict(AxiosKey)

interface Bookmark {
  id: number | null
  title: string
  url: string
  description: string
  tag: string
  date: Date
  likes: number
}

export const getBookmarks = await http.get('/bookmarks')
export const postBookmark = async (value: Bookmark) => await http.post('/bookmarks', value)
