// contactService.js — Contact API abstraction.
//
// The ContactForm component must NOT talk to the network directly. All
// contact submission goes through this service so that a real backend call
// can be wired in later with zero changes to the form.
//
// NOTE (Phase 8, frontend-only):
// The backend does not exist yet, so `submitContactMessage` deliberately does
// NOT call a real endpoint and does NOT report success. When the backend is
// implemented (POST /api/contact), replace the body of this function with a
// real fetch() call. The form and its success/error handling are already
// structured for that.

/**
 * Submit a contact message.
 *
 * @param {{ name: string, email: string, message: string }} payload
 * @returns {Promise<{ ok: boolean, message: string }>}
 *
 * Real implementation (future):
 *   const response = await fetch(`${API_BASE_URL}/api/contact`, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   })
 *   if (!response.ok) throw new Error('Request failed')
 *   return response.json()
 */
export async function submitContactMessage(payload) {
  // Real API integration is pending. The `payload` argument is intentionally
  // accepted now (matching the future POST /api/contact contract) but is not
  // used yet — nothing is sent or stored. We do NOT fake a submission.
  void payload
  throw new Error('Contact API is not connected yet.')
}

export default submitContactMessage