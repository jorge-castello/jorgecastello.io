const NEWSLETTER_API_ENDPOINT = 'https://www.getrevue.co/api'
const ADD_SUBSCRIBER_ENDPOINT = `${NEWSLETTER_API_ENDPOINT}/v2/subscribers`

const API_TOKEN = process.env.REVUE_NEWSLETTER_API_KEY

export interface AddSubscriberResult {
  id: number
  list_id: number
  email: string
  first_name: string | null
  last_name: string | null
  last_changed: Date
  error?: { email?: string[] }
}

export async function addSubscriber(
  email: string
): Promise<AddSubscriberResult> {
  const addSubscriber = await fetch(ADD_SUBSCRIBER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Token ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, double_opt_in: false }),
  })

  const addSubscriberResult: AddSubscriberResult = await addSubscriber.json()
  if (addSubscriberResult.error) {
    handleError(addSubscriberResult.error)
  }

  return addSubscriberResult
}

export class AlreadySubscribedError extends Error {}

const alreadySubscribedErrorMessage =
  'This email address has already been subscribed'

function handleError(error: { email?: string[] }) {
  if (error.email) {
    error.email.forEach((err) => {
      if (err === alreadySubscribedErrorMessage) {
        throw new AlreadySubscribedError(alreadySubscribedErrorMessage)
      }
    })
  }

  throw new Error('Unexpected error when attempting to add subscriber to revue')
}
