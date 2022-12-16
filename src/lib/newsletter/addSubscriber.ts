import { HttpRequests, HttpStatus } from '@/constants/http'

// End point for website that actually manages the API
const NEWSLETTER_API_ENDPOINT = 'https://api.sendinblue.com/v3/contacts'
const API_KEY = process.env.NEWSLETTER_API_KEY
const NEWSLETTER_LIST_IDS = [3]
const SUCCESSFUL_STATUS_CODES = [
  HttpStatus.OK,
  HttpStatus.CREATED,
  HttpStatus.NO_CONTENT,
]

export interface AddSubscriberInput {
  email: string
}

// This method is intended for use in the backend /api calls
export async function addSubscriber({
  email,
}: AddSubscriberInput): Promise<void> {
  const addSubscriber = await fetch(NEWSLETTER_API_ENDPOINT, {
    method: HttpRequests.POST,
    headers: {
      'api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application.json',
    },
    body: JSON.stringify({
      email,
      updateEnabled: true,
      listIds: NEWSLETTER_LIST_IDS,
    }),
  })
  console.log({ subscriberStatus: addSubscriber.status })

  if (!SUCCESSFUL_STATUS_CODES.includes(addSubscriber.status)) {
    throw new Error('Something unexpected happened :(')
  }
}
