import Input from "./Input";

const BookingForm = () => {
  return (
    <form className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:max-w-2xl">
        <Input label="First Name" placeholder="John"/>
        <Input label="Last Name" placeholder="Wick"/>
        <Input label="Email" placeholder="johnwick@example.com"/>
        <Input label="Phone Number" placeholder="(123) 456-7890"/>
    </form>
  )
}

export default BookingForm;