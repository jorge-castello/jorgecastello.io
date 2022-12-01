import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import firebaseApp from './app'

const storage = getStorage(firebaseApp)

export async function getResumeUrl() {
  const resumeRef = ref(storage, 'Jorge Castello - Resume.pdf')
  return getDownloadURL(resumeRef)
}
