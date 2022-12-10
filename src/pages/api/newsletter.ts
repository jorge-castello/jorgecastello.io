import httpRequests from '@/constants/http-requests'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== httpRequests.POST) {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  // parse name, email
  // send a request to the revue app
  // do some testing to see what the various responses are (i.e. error, already subscribed, success)
  // based on the response of the newsletter api we should show some kind of view
}
