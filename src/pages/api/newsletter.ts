import { HttpRequests, HttpStatus } from '@/constants/http'
import {
  AddSubscriberResult,
  addSubscriber,
  AlreadySubscribedError,
} from '@/lib/revue'
import { InvalidInputError } from '@/models/error'
import { NextApiRequest, NextApiResponse } from 'next'

// API endpoint to add subscribers to newsletter
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== HttpRequests.POST) {
    return res
      .status(HttpStatus.METHOD_NOT_ALLOWED)
      .send({ message: 'Only POST requests allowed' })
  }

  try {
    const { email } = parseAndValidateRequest(req)
    const addSubscriberResult: AddSubscriberResult = await addSubscriber(email)

    return res.status(HttpStatus.OK).json(addSubscriberResult)
  } catch (ex) {
    if (
      ex instanceof InvalidInputError ||
      ex instanceof AlreadySubscribedError
    ) {
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
