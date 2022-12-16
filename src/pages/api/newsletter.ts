import { HttpRequests, HttpStatus } from '@/constants/http'
import * as newsletter from '@/lib/newsletter/addSubscriber'
import { InvalidInputError } from '@/models/error'
import { NextApiRequest, NextApiResponse } from 'next'

// API endpoint to add subscribers to newsletter
const ADD_SUBSCRIBER_API_ENDPOINT = '/api/newsletter'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== HttpRequests.POST) {
    return res
      .status(HttpStatus.METHOD_NOT_ALLOWED)
      .json({ message: 'Only POST requests allowed' })
  }

  try {
    const { email } = parseAndValidateRequest(req)

    await newsletter.addSubscriber({ email })
    return res.status(HttpStatus.OK).json({
      success: true,
    })
  } catch (ex) {
    if (ex instanceof InvalidInputError) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: ex.message })
    }
    return res.status(HttpStatus.SERVER_FAULT).send({ error: ex.message })
  }
}

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function parseAndValidateRequest(req: NextApiRequest): {
  email: string
} {
  const { email } = req.body
  if (!email) {
    throw new InvalidInputError('Please enter your email address')
  } else if (!email.match(emailRegex)) {
    throw new InvalidInputError('Please enter a valid email address')
  }

  return { email }
}

// This method is intended for use in the front-end POST requests
export async function submitNewsletterForm(
  input: newsletter.AddSubscriberInput
) {
  return fetch(ADD_SUBSCRIBER_API_ENDPOINT, {
    method: HttpRequests.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
}
