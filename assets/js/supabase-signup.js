const supabase = new Supabase('<YOUR_SUPABASE_URL>')

const form = document.getElementById('signup-form')
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const email = form.elements['email'].value
  const password = form.elements['password'].value

  try {
    const { body } = await supabase.auth.signup({ email, password })
    console.log(body)
  } catch (error) {
    console.error(error)
  }
})