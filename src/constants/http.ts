const HttpRequests = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const HttpStatus = {
  OK: 200,
  BAD_REQUEST: 400,
  METHOD_NOT_ALLOWED: 405,
  SERVER_FAULT: 500,
}

export { HttpRequests, HttpStatus }
