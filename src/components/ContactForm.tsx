import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" required rows={5} placeholder="Tell me about your project or opportunity." />
      </label>
      <button className="button button-primary" type="submit">
        {sent ? <><CheckCircle2 size={17} /> Form validated</> : 'Send message'}
      </button>
      <p className="form-status" aria-live="polite">
        {sent
          ? 'Thanks. This demo form is ready to connect to your preferred form or email service.'
          : 'Required fields are validated in your browser.'}
      </p>
    </form>
  )
}
