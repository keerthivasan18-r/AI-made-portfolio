export function validateContactForm(values) {
  const errors = {};

  if (!values.name || !values.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.email || !values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject || !values.subject.trim()) {
    errors.subject = 'Please provide a subject.';
  }

  if (!values.message || !values.message.trim()) {
    errors.message = 'Please enter your message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return errors;
}
